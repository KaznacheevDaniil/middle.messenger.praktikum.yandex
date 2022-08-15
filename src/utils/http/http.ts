enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

type Options = {
  method: Method;
  credentials?: string;
  mode?: string;
  headers?: object;
  body?: string;
  data?: any;
  timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export class HTTPTransport {
  private _instance: string;

  constructor(url : string) {
    this._instance = url;
  }

  queryStringify(data: object) {
    // Здесь достаточно и [object Object] для объекта
    const keys = Object.keys(data);
    return keys.reduce(
      (result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
      '?',
    );
  }

  get = (url: string, options: OptionsWithoutMethod = {}) => this.request(this._instance + url, { ...options, method: Method.GET });

  put = (url: string, options : OptionsWithoutMethod = {}) => this.request(this._instance + url, { ...options, method: Method.PUT });

  post = (url: string, options : OptionsWithoutMethod = {}) => this.request(this._instance + url, { ...options, method: Method.POST });

  delete = (url: string, options : OptionsWithoutMethod = {}) => this.request(this._instance + url, { ...options, method: Method.DELETE });

  request = (url: string, options: Options = { method: Method.GET }) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

    xhr.open(
      options.method,
      options.method === Method.GET && !!options.data
        ? `${url}${this.queryStringify(options.data)}`
        : url,
    );
    if (options.headers) {
      Object.keys(options.headers).forEach((key) => {
        xhr.setRequestHeader(key, options.headers[key]);
      });
    }

    if (options.timeout) {
      xhr.timeout = options.timeout;
    } else {
      xhr.timeout = 5000;
    }

    xhr.onload = () => {
      resolve(xhr);
    };

    xhr.onerror = reject;

    xhr.ontimeout = reject;

    if (options.method === Method.GET || !options.body) {
      xhr.send();
    } else {
      xhr.send(options.body);
    }
  });
}
