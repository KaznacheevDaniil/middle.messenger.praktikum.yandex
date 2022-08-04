import { ChatApi } from '../api/chat.api';
import { displayFormLog } from '../formLogger';
import store from '../store';

export class UserChatController {
  static deleteUserFromChat(data, form){
    console.log(data['users'] )
    let arrayUsersId = []
    data['users'].split(',').forEach((item)=>{
      arrayUsersId.push(trim(item));
    })
    data['users'] = arrayUsersId;

    console.log(data['users'] )

    ChatApi.deleteUsers(data).then((response) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }

  static addUserFromChat(data, form){
    console.log(data['users'] )
    let arrayUsersId = []
    data['users'].split(',').forEach((item)=>{
      arrayUsersId.push(trim(item));
    })
    data['users'] = arrayUsersId;

    console.log(data['users'] )

    ChatApi.addUsers(data).then((response) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }

  static createChat(data, form) {
    console.log(data);
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
    console.log(data);
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

    getAllSiblings(chatInSidebar, false).forEach((item)=>{
      item.classList.remove('active');
    })

    store.set('active.chat', {});

    const activeChatOgj = this.getActiveChat(store.getState(), chatId);

    if (activeChatOgj.id !== store.getState().active.chat.id) {
      store.set('active.chat', activeChatOgj);
    }

    document.querySelector('.message-panel').classList.remove('hidden')
    document.querySelector('.chat-not-choose').classList.add('hidden')


  }

  static getActiveChat(stateCopy, chatId) {
    let currentItem;
    stateCopy.chats.forEach((item) => {
      if (item.id == chatId) {
        currentItem = item;
      }
    });
    return currentItem;
  }

}



function getAllSiblings(element, include) {
  var siblings = element.parentNode.children;
  if(include)
    return siblings;

  var out = [];
  for(var i=0; i<siblings.length; i++) {
    if (siblings[i] != element) {
      out.push(siblings[i]);
    }
  }

  return out;
}

function trim (word: string, symbols?: string) : string{
  if(!symbols){
    return word.replace(/^[\s|u'\xa0']+|[\s|u'\xa0']+$/gu,"")
  }else{
    let rep = new RegExp("^[" + symbols + "]+|[" + symbols + "]+$", 'gu')
    return word.replace(rep, "")
  }
}