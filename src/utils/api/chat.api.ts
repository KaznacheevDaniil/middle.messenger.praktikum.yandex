import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const chatAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats');

export class ChatApi extends BaseAPI {
  static create(data) {
    return chatAPIInstance.post('', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  static request() {
    return chatAPIInstance.get('', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  static delete(data) {
    return chatAPIInstance.delete('', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  static deleteUsers(data) {
    return chatAPIInstance.delete('/users', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  static addUsers(data) {
    return chatAPIInstance.put('/users', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
