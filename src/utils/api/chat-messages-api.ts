import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const chatMessagesAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats/token');

export class ChatMessagesAPI extends BaseAPI {
  static request(id) {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatMessagesAPIInstance.post(`/${id}`, {
      credentials: 'include',
      mode: 'cors',
    });
  }
}
