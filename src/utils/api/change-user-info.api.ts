import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const changeUserInfoAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user/');

export class changeUserInfoAPI extends BaseAPI {
  static change(data) {
    return changeUserInfoAPIInstance.put('profile', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {return response})
  }
}
