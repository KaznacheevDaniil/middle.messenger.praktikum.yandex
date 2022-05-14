import EventBus from "../utils/event-bus";
import Handlebars from "handlebars";
import { v4 as makeUUID } from "uuid";

class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  private _element: HTMLElement;
  private _meta: { tagName: string; props: object; withInternalID?: Boolean };
  public eventBus: Function;
  public children: object;
  public props;
  public _id: string = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   * @param {Object} settings
   *
   * @returns {void}
   */
  constructor(tagName: string = "div", propsAndChildren: object = {}) {
    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;
    let eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };
    this._id = makeUUID();
    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }
  _getChildren(propsAndChildren) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  _registerEvents(eventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();
    this.dispatchComponentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount(): void {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  // Может переопределять пользователь, необязательно трогать (oldProps)
  componentDidMount(): void {}

  dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps, newProps): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this._render();
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps, newProps): Boolean {
    return true;
  }

  _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render(); // render теперь возвращает DocumentFragment
    this._removeEvents();
    this._element.innerHTML = ""; // удаляем предыдущее содержимое
    this._element.appendChild(block);

    this._addEvents();
  }

  // Может переопределять пользователь, необязательно трогать
  render(): DocumentFragment {
    return;
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      set(target, prop, value) {
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU);
        return true;
      },
      get(target, prop: string) {
        if (prop?.indexOf("_") === 0) {
          throw new Error("Доступ отсутствует!");
        }

        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      deleteProperty() {
        throw new Error("Доступ отсутствует!");
      },
    });
  }
  compile(template: string, props: object) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = this._createDocumentElement("template");

    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);
    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      stub.replaceWith(child.getContent());
    });
    return fragment.content;
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute("data-id", this._id);
    return element;
  }

  show() {
    this._element.style.display = "block";
  }

  hide() {
    this._element.style.display = "none";
  }
}

export default Block;
