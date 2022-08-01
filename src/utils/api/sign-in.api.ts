import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const signinAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth/');

export class SignInAPI extends BaseAPI {
  static request(data) {
    return signinAPIInstance.post('signin', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
