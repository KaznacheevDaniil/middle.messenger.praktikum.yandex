import { HTTPTransport } from "../http/http";
import { BaseAPI } from '../http/base-api';

const chatMessagesAPIInstance = new HTTPTransport('api/v1/messages');

class ChatMessagesAPI extends BaseAPI {

  request(id) {
    return chatMessagesAPIInstance.get(`/${id}`);
  }

}
