import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const logOutAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth/');

export class logOutAPI extends BaseAPI {
  static request() {
    return logOutAPIInstance.post('logout', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
