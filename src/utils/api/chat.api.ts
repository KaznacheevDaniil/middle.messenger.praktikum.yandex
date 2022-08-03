import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const chatAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats');

export class ChatApi extends BaseAPI {
  static create(data) {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
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
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.get('', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      }
    });
  }
}
