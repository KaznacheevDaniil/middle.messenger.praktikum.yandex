import template from './template';
import './style.less';
import conversationComp from '../../components/conversation';
import sidebarComp from '../../components/sidebar';
import Block from '../../utils/block';
import Modal from '../../components/modal';
import Form from '../../components/form';
import Input from '../../components/input';
import Button from '../../components/button';
import { UserChatController } from '../../utils/controllers/chats';
import store from '../../utils/store';

class Chats extends Block {
  render() {
    UserChatController.getAllChats();
    return this.compile(template, {
      sidebar: this.props.sidebar,
      conversation: this.props.conversation,
      modal: this.props.modal,
    });
  }
}

export const PageChats = new Chats('div', {
  sidebar: sidebarComp,
  conversation: conversationComp,
  modalAddUser: new Modal('div', {
    header: 'Add users into this chat',
    content: new Form('div', {
      inputs: new Input('div', {
        inputs: [
          {
            className: 'field',
            type: 'text',
            placeholder: 'Users id',
            name: 'users',
            disabled: 'disabled',
          },
        ],
      }),
      button: new Button('div', {
        id: 'getUserByLogin',
        type: 'submit',
        value: 'Add',
      }),
      events: {
        submit: (event) => {
          event.preventDefault();

          const input = event.target.querySelector('input');
          const data = {};
          data[input.name] = input.value;
          data.chatId = store.getState().active?.chat.id;

          UserChatController.addUserFromChat(data, event.target);
        },
      },
    }),
    attr: {
      id: 'getUserByLoginModal',
      class: 'modal-wrapper',
    },
    events: {
      click: (event) => {
        if (event.target.className === 'modal-wrapper') {
          document.getElementById('getUserByLoginModal').style.display = 'none';
        }
      },
    },
  }),
  modalCreateChat: new Modal('div', {
    header: 'Create chat',
    content: new Form('div', {
      inputs: new Input('div', {
        inputs: [{
          className: 'field',
          type: 'text',
          placeholder: 'Title chat',
          name: 'title',
          disabled: 'disabled',
        }],
      }),
      button: new Button('div', {
        id: 'CreateChat',
        type: 'submit',
        value: 'Create',
      }),
      events: {
        submit: (event) => {
          event.preventDefault();
          const input = event.target.querySelector('input');
          const data = {};
          data[input.name] = input.value;

          UserChatController.createChat(data, event.target);
        },
      },
    }),
    attr: {
      id: 'CreateChatModal',
      class: 'modal-wrapper',
    },
    events: {
      click: (event) => {
        if (event.target.className === 'modal-wrapper') {
          document.getElementById('CreateChatModal').style.display = 'none';
        }
      },
    },
  }),
  modalDeleteChat: new Modal('div', {
    header: 'Delete chat',
    content: new Form('div', {
      inputs: new Input('div', {
        inputs: [{
          className: 'field',
          type: 'text',
          placeholder: 'Id chat',
          name: 'chatId',
          disabled: 'disabled',
        }],
      }),
      button: new Button('div', {
        id: 'DeleteChat',
        type: 'submit',
        value: 'Delete',
      }),
      events: {
        submit: (event) => {
          event.preventDefault();

          const input = event.target.querySelector('input');
          const data = {};
          data[input.name] = input.value;

          UserChatController.deleteChat(data, event.target);
        },
      },
    }),
    attr: {
      id: 'DeleteChatModal',
      class: 'modal-wrapper',
    },
    events: {
      click: (event) => {
        if (event.target.className === 'modal-wrapper') {
          document.getElementById('DeleteChatModal').style.display = 'none';
        }
      },
    },
  }),
  modalDeleteUserFromChat: new Modal('div', {
    header: 'Delete users from this chat',
    content: new Form('div', {
      inputs: new Input('div', {
        inputs: [{
          className: 'field',
          type: 'text',
          placeholder: 'Users id',
          name: 'users',
          disabled: 'disabled',
        }],
      }),
      button: new Button('div', {
        id: 'DeleteUsers',
        type: 'submit',
        value: 'Delete',
      }),
      events: {
        submit: (event) => {
          event.preventDefault();

          const input = event.target.querySelector('input');
          const data = {};
          data[input.name] = input.value;
          data.chatId = store.getState().active?.chat.id;
          UserChatController.deleteUserFromChat(data, event.target);
        },
      },
    }),
    attr: {
      id: 'DeleteUsersModal',
      class: 'modal-wrapper',
    },
    events: {
      click: (event) => {
        if (event.target.className === 'modal-wrapper') {
          document.getElementById('DeleteUsersModal').style.display = 'none';
        }
      },
    },
  }),
});

export default PageChats;
