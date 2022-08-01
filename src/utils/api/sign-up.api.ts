import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const signupAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth/');

export class SignUpAPI extends BaseAPI {
  static create(data) {
    return signupAPIInstance.post('signup', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
