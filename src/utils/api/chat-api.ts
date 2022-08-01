import { HTTPTransport } from '../http/http';
import { BaseAPI } from '../http/base-api';

const chatAPIInstance = new HTTPTransport('https://ya-praktikum.tech/api/v1/chats');

class ChatAPI extends BaseAPI {
  create() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.post('/', {});
  }

  request() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.get('/full');
  }
}
