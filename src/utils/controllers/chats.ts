import { ChatApi } from '../api/chat.api';
import { displayFormLog } from '../formLogger';
import store from '../store';

function trim(word: string, symbols?: string) : string {
  if (!symbols) {
    return word.replace(/^[\s|u'\xa0']+|[\s|u'\xa0']+$/gu, '');
  }
  const rep = new RegExp(`^[${symbols}]+|[${symbols}]+$`, 'gu');
  return word.replace(rep, '');
}

function getAllSiblings(element, include) {
  const siblings = element.parentNode.children;
  if (include) return siblings;

  const out = [];
  for (let i = 0; i < siblings.length; i += 1) {
    if (siblings[i] !== element) {
      out.push(siblings[i]);
    }
  }

  return out;
}

export class UserChatController {
  static deleteUserFromChat(data, form) {
    const arrayUsersId = [];
    data.users.split(',').forEach((item) => {
      arrayUsersId.push(Number(trim(item)));
    });
    data.users = arrayUsersId;

    ChatApi.deleteUsers(data).then((response) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }

  static addUserFromChat(data, form) {
    const arrayUsersId = [];
    data.users.split(',').forEach((item) => {
      arrayUsersId.push(Number(trim(item)));
    });

    data.users = arrayUsersId;

    ChatApi.addUsers(data).then((response) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }

  static createChat(data, form) {

    ChatApi.create(data).then((response) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
        this.getAllChats();
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }

  static deleteChat(data, form) {

    ChatApi.delete(data).then((response) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
        this.getAllChats();
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }

  static getAllChats() {
    ChatApi.request().then((response) => {
      store.set('chats', JSON.parse(response.responseText));
    });
  }

  static setActiveChat(chatInSidebar, chatId, userId) {
    chatInSidebar.classList.add('active');

    getAllSiblings(chatInSidebar, false).forEach((item) => {
      item.classList.remove('active');
    });

    store.set('active.chat', {});

    const activeChatOgj = this.getActiveChat(store.getState(), chatId);

    if (activeChatOgj.id !== store.getState().active.chat.id) {
      store.set('active.chat', activeChatOgj);
    }

    document.querySelector('.message-panel').classList.remove('hidden');
    document.querySelector('.chat-not-choose').classList.add('hidden');
  }

  static getActiveChat(stateCopy, chatId) {
    let currentItem;
    stateCopy.chats.forEach((item) => {
      if (item.id.toString() === chatId) {
        currentItem = item;
      }
    });
    return currentItem;
  }
}
