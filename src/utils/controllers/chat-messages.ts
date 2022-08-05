import { ChatMessagesAPI } from '../api/chat-messages-api';

function displayMessage(event, name) {
  const wrapMessage = document.createElement('div');
  wrapMessage.classList.add('message');
  wrapMessage.classList.add(name);

  const contentMessage = document.createElement('p');
  contentMessage.textContent = event.content;

  wrapMessage.appendChild(contentMessage);

  const wrapInfoMessage = document.createElement('div');
  wrapInfoMessage.classList.add('info-msg');

  const time = document.createElement('span');
  time.textContent = new Date(event.time).toLocaleTimeString();
  time.classList.add('time');

  wrapInfoMessage.appendChild(time);
  wrapMessage.appendChild(wrapInfoMessage);

  document.getElementById('MessagesContainer').appendChild(wrapMessage);
}

export class ChatController {
  static getOldMessages(chatId, userId) {
    this.createSessionsMessage(chatId).then((response) => {
      const tokenChat = JSON.parse(response.responseText).token;
      if (tokenChat) {
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${tokenChat}`);

        socket.addEventListener('message', (event) => {
          JSON.parse(event.data).forEach((item) => {
            if (item.user_id !== userId) {
              displayMessage(item, 'person');
            } else {
              displayMessage(item, 'user');
            }
          });
          socket.close(1000, 'работа закончена');
        });

        socket.addEventListener('open', () => {
          console.log('Соединение установлено');

          socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
          }));
        });
      }
    });
  }

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
