class HTTPTransport {
  METHODS = {
    GET: "GET",
    PUT: "PUT",
    POST: "POST",
    DELETE: "DELETE",
  };

  queryStringify(data: object) {
    // Здесь достаточно и [object Object] для объекта
    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
      return `${result}${key}=${data[key]}${
        index < keys.length - 1 ? "&" : ""
      }`;
    }, "?");
  }

  get = (url: string, options = {}) => {
    return this.request(url, { ...options, method: this.METHODS.GET });
  };
  put = (url: string, options = {}) => {
    return this.request(url, { ...options, method: this.METHODS.PUT });
  };
  post = (url: string, options = {}) => {
    return this.request(url, { ...options, method: this.METHODS.POST });
  };
  delete = (url: string, options = {}) => {
    return this.request(url, { ...options, method: this.METHODS.DELETE });
  };

  request = (url: string, options) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(
        options.method,
        options.method === this.METHODS.GET && !!options.data
          ? `${url}${this.queryStringify(options.data)}`
          : url
      );
      if (options.headers) {
        Object.keys(options.headers).forEach(function (key) {
          xhr.setRequestHeader(key, options.headers[key]);
        });
      }

      if (options.timeout) {
        xhr.timeout = options.timeout;
      } else {
        xhr.timeout = 5000;
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onerror = reject;

      xhr.ontimeout = reject;

      if (options.method === this.METHODS.GET || !options.data) {
        xhr.send();
      } else {
        xhr.send(options.data);
      }
    });
  };
}
