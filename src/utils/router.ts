import Route from './route';

export default class Router {
  public routes;

  public history;

  public currentRoute;

  private _rootQuery;

  private static __instance: any;

  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    // Реагируем на изменения в адресной строке и вызываем перерисовку
    window.onpopstate = (event) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname) {
    const route = this._getRoute(pathname);

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.go(1);
  }

  _getRoute(pathname) {
    return this.routes.find((route) => route.match(pathname));
  }
}
