import Block from '../../utils/block';
import './style.less';
import template from './template';
import ChatTopPanel from '../chat-top-panel';
import ButtonWithImage from '../button-with-image';
import messagesComp from '../message';
import ChatBottomPanel from '../chat-bottom-panel';
import InputMsg from '../input-msg';
import Form from '../form';
import { Validation } from '../../utils/validation';
import { ChatController } from '../../utils/controllers/chat-messages';
import store from '../../utils/store';
import Menu from '../menu';

class Conversation extends Block {
  render() {
    return this.compile(template, {
      chatTopPanel: this.props.chatTopPanel,
      messages: this.props.messages,
      chatBottomPanel: this.props.chatBottomPanel,
      attr: this.props.attr,
    });
  }
}

const conversationComp = new Conversation('div', {
  chatTopPanel: new ChatTopPanel('div', {
    photoChat: '',
    nameChat: '',
    button: new ButtonWithImage('div', {
      imgLink:
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiIgaWQ9IkxheWVyXzIiPjxwYXRoIGQ9Ik0xNiw3YTIsMiwwLDEsMSwyLTJBMiwyLDAsMCwxLDE2LDdabTAtMmgwWm0wLDBoMFptMCwwaDBabTAsMGgwWm0wLDBoMFptMCwwaDBabTAsMGgwWm0wLDBoMFoiLz48cGF0aCBkPSJNMTYsMThhMiwyLDAsMSwxLDItMkEyLDIsMCwwLDEsMTYsMThabTAtMmgwWm0wLDBoMFptMCwwaDBabTAsMGgwWm0wLDBoMFptMCwwaDBabTAsMGgwWm0wLDBoMFoiLz48cGF0aCBkPSJNMTYsMjlhMiwyLDAsMSwxLDItMkEyLDIsMCwwLDEsMTYsMjlabTAtMmgwWm0wLDBoMFptMCwwaDBabTAsMGgwWm0wLDBoMFptMCwwaDBabTAsMGgwWm0wLDBoMFoiLz48L2c+PGcgaWQ9ImZyYW1lIj48cmVjdCBjbGFzcz0iY2xzLTEiIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIvPjwvZz48L3N2Zz4=',
      type: 'button',
      className: 'button-option hidden',
      id: 'add-user',
      events: {
        click: (event) => {
          try {
            document.querySelector('.options__chat').classList.toggle('hidden');
          } catch (error) {
            console.error('options__chat was not found');
          }
        },
      },
    }),
    menu: new Menu('div', {
      className: 'menu-li',
      listsMenu: [{ id: 'AddUserIntoChat', content: 'Add user' }, { id: 'DeleteUserFromChat', content: 'Delete user' }],
      events: {
        click: (event) => {
          if (event.target.id === 'AddUserIntoChat') {
            document.getElementById('getUserByLoginModal').style.display = 'flex';
          }
          if (event.target.id === 'DeleteUserFromChat') {
            document.getElementById('DeleteUsersModal').style.display = 'flex';
          }
        },
      },
      attr: {
        class: 'options__chat hidden',
      },
    }),
  }),
  messages: messagesComp,
  chatBottomPanel: new ChatBottomPanel('div', {
    form: new Form('div', {
      action: '/sendMessage',
      inputs: new InputMsg('div', {
        placeholder: 'Wtite message...',
        name: 'message',
        className: 'input',
        required: 'required',
        valid: true,
        attr: {
          class: 'input-wrap',
        },
        events: {
          focus: (event) => {
            Validation.hideError(event.target);
          },
          blur: (event) => {
            if (event.target.name === 'message') {
              if (!Validation.message(event.target.value)) {
                Validation.showError(event.target);
              }
            }
          },
        },
      }),
      button: new ButtonWithImage('div', {
        imgLink:
            'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjQ3IDMxYTIgMiAwIDAgMS0xLjgtMS4wOWwtNC03LjU3YTEgMSAwIDAgMSAxLjc3LS45M2w0IDcuNTdMMjkgMy4wNiAzIDEyLjQ5bDkuOCA1LjI2IDguMzItOC4zMmExIDEgMCAwIDEgMS40MiAxLjQybC04Ljg1IDguODRhMSAxIDAgMCAxLTEuMTcuMThMMi4wOSAxNC4zM2EyIDIgMCAwIDEgLjI1LTMuNzJsMjUuOTEtOS40OGEyIDIgMCAwIDEgMi42MiAyLjYybC05LjQ4IDI1LjkxQTIgMiAwIDAgMSAxOS42MSAzMVoiIGRhdGEtbmFtZT0iTGF5ZXIgNDUiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSJmaWxsLTEwMTgyMCI+PC9wYXRoPjwvc3ZnPg==',
        type: 'submit',
        className: 'button-primary rounded-img',
      }),
      events: {
        submit: (event) => {
          event.preventDefault();

          const element = event.target;
          if (Validation.check(element)) {
            try {
              const message = event.target.querySelector('input').value;
              if (typeof message === 'string') {
                ChatController.SendMessage(message, store.getState().active.chat.id, store.getState().user.id);
                element.querySelector('input').value = '';
              } else {
                console.error(`${message} (message) was not is string!`);
              }
            } catch (error) {
              console.error('SendMessage was not work');
            }
          }
        },
      },
      attr: {
        class: 'bottom-panel',
      },
    }),
  }),
  attr: {
    class: 'conversation',
  },
});
export default conversationComp;
