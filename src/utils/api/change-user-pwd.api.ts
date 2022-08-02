import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const changeUserPwdAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user/');

export class changeUserPwdAPI extends BaseAPI {
  static change(data) {
    return changeUserPwdAPIInstance.put('password', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {return response})
  }
}