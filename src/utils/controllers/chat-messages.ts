import { ChatMessagesAPI } from '../api/chat-messages-api';
import { displayMessage } from '../methods/displayChatMessages'

export class ChatController {

  static createSessionsMessage(chatId) {
    return ChatMessagesAPI.request(chatId);
  }

  static SendMessage(message, chatId, userId) {
    this.createSessionsMessage(chatId).then((response) => {
      const tokenChat = JSON.parse(response.responseText).token;
      if (tokenChat) {
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${tokenChat}`);

        socket.addEventListener('open', () => {
          console.log('Соединение установлено');

          socket.send(JSON.stringify({
            content: message,
            type: 'message',
          }));
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

        socket.addEventListener('error', (event) => {
          console.log('Ошибка', event.message);
        });
      }
    });
  }
}
