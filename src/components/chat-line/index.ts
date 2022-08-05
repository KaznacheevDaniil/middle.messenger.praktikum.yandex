import Block from '../../utils/block';
import './style.less';
import template from './template';
import { connect } from '../../utils/highOrderComponents';
import store from '../../utils/store';
import { UserChatController } from '../../utils/controllers/chats';

class ChatLines extends Block {
  render() {
    return this.compile(template, {
      chatlinePersons: this.props.chatlinePersons,
    });
  }
}

interface StateChatsModel {
  avatar: string;
  created_by: number;
  id: number;
  last_message: string;
  title: string;
  unread_count: string | number;
}

const chatlinePersons = [];

const ChatLinesWrapState = connect((state) => ({
  chatlinePersons: state.chats,
}));

const ChatLinesWithState = ChatLinesWrapState(ChatLines);

const chatLineComp = new ChatLinesWithState('div', {
  chatlinePersons,
  events: {
    click: (event) => {
      if (event.target.className === 'wrap' && !event.target.parentElement.classList.contains('active')) {
        const childBlockMessages = document.getElementById('MessagesContainer');
        while (childBlockMessages.firstChild) {
          childBlockMessages.firstChild.remove();
        }
        UserChatController.setActiveChat(event.target.parentElement, event.target.dataset.id, store.getState().user.id);
      }
    },
  },
});
export default chatLineComp;
