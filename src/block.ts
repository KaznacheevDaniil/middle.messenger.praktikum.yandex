class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  private _element : HTMLElement;
  private _meta : { tagName: string,  props: object};
  public eventBus : Function;
  public props: object;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName: string = "div", props: object = {}) {
    let eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus) : void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() : void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() : void {
    this._createResources();
    this.dispatchComponentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  _componentDidMount() : void {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать (oldProps)
  componentDidMount() : void{}

  dispatchComponentDidMount() : void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps, newProps) : void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if(response){
      this._render();
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps, newProps) : Boolean {
    return true;
  }

  setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    this._element.insertAdjacentElement('beforebegin', block);
  }

  // Может переопределять пользователь, необязательно трогать
  render() : HTMLElement {
    return;
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      set (target, prop, value) {
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU);
        return true;
      },
      get (target, prop) {
        if (typeof prop !== "string" || prop?.indexOf("_") === 0) {
          throw new Error('Доступ отсутствует!');
        }

        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      deleteProperty () {
        throw new Error('Доступ отсутствует!');
      }
    });
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this._element.style.display = 'block';
  }

  hide() {
    this._element.style.display = 'none';
  }
}