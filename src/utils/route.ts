import render from './renderDOM';

function isEqual(lhs, rhs) {
  return lhs === rhs;
}

export default class Route {
  private _pathname: string;

  private _blockClass: object;

  private _block: object;

  private _props: object;

  constructor(pathname, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      // @ts-ignore
      this._block.hide();
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = this._blockClass;
      // @ts-ignore
      render(this._props.rootQuery, this._block);
      return;
    }

    // @ts-ignore
    this._block.show();
  }
}
