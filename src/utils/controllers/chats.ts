import { ChatApi } from '../api/chat.api';
import { displayFormLog } from '../formLogger';
import store from "../store";

export class UserChatController {
  static create(data, form) {
    console.log(data);
    ChatApi.create(data).then((response) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
        this.getAll();
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }

  static getAll() {
    ChatApi.request().then((response) => {
      console.log(store.getState())
      store.set('chats', JSON.parse(response.responseText));
      console.log(store.getState())
      console.log('Загрузка чатов : ', JSON.parse(response.responseText).reason)
    });
  }
}
