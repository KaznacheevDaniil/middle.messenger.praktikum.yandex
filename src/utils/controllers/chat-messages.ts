import { ChatMessagesAPI } from '../api/chat-messages-api';
import { displayMessage } from '../methods/displayChatMessages';
import store from '../store';

interface responseModel {
  status: number;
  responseText: string;
}

export class ChatController {
  static createSessionsMessage(chatId, userId) {
    ChatMessagesAPI.request(chatId).then((response : responseModel) => {
      const tokenChat = JSON.parse(response.responseText).token;
      if (tokenChat) {
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${tokenChat}`);
        socket.addEventListener('open', () => {
          console.log('Соединение установлено');
        });

        socket.addEventListener('close', (event) => {
          if (event.wasClean) {
            console.log('Соединение закрыто чисто');
          } else {
            console.log('Обрыв соединения');
          }
          console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        socket.addEventListener('message', (event) => {
          const eventJson = JSON.parse(event.data);
          if (eventJson.user_id !== userId) {
            displayMessage(eventJson, 'person');
          } else {
            displayMessage(eventJson, 'user');
          }
        });

        socket.addEventListener('error', (event: any) => {
          console.log('Ошибка', event.message);
        });

        store.set('active.socket', socket);
      } else {
        console.error('Token chat was not found!');
      }
    });
  }

  static SendMessage(message, socket) {
    socket.send(JSON.stringify({
      content: message,
      type: 'message',
    }));
  }
}
