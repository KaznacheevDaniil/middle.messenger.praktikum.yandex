import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const avatarAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user/');

export class avatarAPI extends BaseAPI {
  static change(data) {
    return avatarAPIInstance.put('profile/avatar', {
      credentials: 'include',
      mode: 'cors',
      body: data,
    }).then(response => {return response})
  }
}
