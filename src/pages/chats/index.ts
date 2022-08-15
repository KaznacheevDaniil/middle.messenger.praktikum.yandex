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
    return this.compile(template, {
      sidebar: this.props.sidebar,
      conversation: this.props.conversation,
      modal: this.props.modal,
    });
  }
}
UserChatController.getAllChats();
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
          if (input) {
            const data = {
              chatId: undefined
            };
            data[input.name] = input.value;
            data.chatId = store.getState().active?.chat.id;

            UserChatController.addUserFromChat(data, event.target, input);
          } else {
            console.error("getUserByLogin's inputs was not found!");
          }
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
          try {
            event.target.querySelector('.log-container').textContent = '';
          } catch (event) {
            console.error('getUserByLoginModal log-container was not found!');
          }
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
          if (input) {
            const data = {};
            data[input.name] = input.value;

            UserChatController.createChat(data, event.target, input);
          } else {
            console.error("CreateChat's inputs was not defined!");
          }
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
          try {
            event.target.querySelector('.log-container').textContent = '';
          } catch (event) {
            console.error('CreateChatModal log-container was not found!');
          }
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
          if (input) {
            const data = {};
            data[input.name] = input.value;

            UserChatController.deleteChat(data, event.target, input);
          } else {
            console.error("DeleteChat's inputs was not defined!");
          }
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
          try {
            event.target.querySelector('.log-container').textContent = '';
          } catch (event) {
            console.error('DeleteChatModal log-container was not found!');
          }
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
          if (input) {
            const data = {
              chatId: undefined
            };
            data[input.name] = input.value;
            data.chatId = store.getState().active?.chat.id;
            UserChatController.deleteUserFromChat(data, event.target, input);
          } else {
            console.error("DeleteUsers's inputs was not defined!");
          }
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
          try {
            event.target.querySelector('.log-container').textContent = '';
          } catch (event) {
            console.error('DeleteUsersModal log-container was not found!');
          }
        }
      },
    },
  }),
});

export default PageChats;
