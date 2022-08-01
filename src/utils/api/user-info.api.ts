import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const userInfoAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth/');

export class UserInfoAPI extends BaseAPI {
  static request() {
    return userInfoAPIInstance.get('user', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
