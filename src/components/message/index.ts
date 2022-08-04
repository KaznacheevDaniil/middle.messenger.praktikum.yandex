import Handlebars from 'handlebars';
import Block from '../../utils/block';
import './style.less';
import template from './template';
import store from '../../utils/store';
import { connect } from '../../utils/highOrderComponents';

Handlebars.registerHelper('isAuthor', (value, userId) => value === userId);

class Messages extends Block {
  render() {
    return this.compile(template, {
      userMessages: this.props.userMessages,
      date: this.props.date,
    });
  }
}

const userMessages = [
  {
    author: 'Person',
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    time: '12:32',
    status: 'read',
  },
  {
    userId: 'Person',
    content: 'sadasdasd',
    time: '12:32',
    id: 'read',
  },
  {
    author: 'Person',
    message: 'sadasdasd',
    time: '12:32',
    status: 'read',
  },
  {
    author: 'User',
    message: 'Hi, man!',
    time: '12:32',
    status: 'unread',
  },
];

const MessagesWrapState = connect((state) => ({
  userMessages: state.messages,
}));
const MessagesWithState = MessagesWrapState(Messages);

const messagesComp = new MessagesWithState('div', {
  PersonId: store.getState().user?.id,
  userMessages,
  date: '25 september 2019',
});
export default messagesComp;
