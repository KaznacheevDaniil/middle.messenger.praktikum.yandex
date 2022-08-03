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

class Chats extends Block {
  render() {
    UserChatController.getAll();
    return this.compile(template, {
      sidebar: this.props.sidebar,
      conversation: this.props.conversation,
      modal: this.props.modal,
    });
  }
}

const inputs = [
  {
    className: 'field',
    type: 'text',
    placeholder: 'Login',
    name: 'login',
    disabled: 'disabled',
  },
];

export const PageChats = new Chats('div', {
  sidebar: sidebarComp,
  conversation: conversationComp,
  modalAddUser: new Modal('div', {
    header: 'Add user',
    content: new Form('div', {
      inputs: new Input('div', { inputs }),
      button: new Button('div', {
        id: 'getUserByLogin',
        type: 'submit',
        value: 'Add',
      }),
      events: {
        submit: (event) => {
          event.preventDefault();
          console.log('Add user');
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

          UserChatController.create(data, event.target);
          console.log('Create chat');
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
          name: 'id',
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
          console.log('Delete Chat');
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
  })
});

export default PageChats;
