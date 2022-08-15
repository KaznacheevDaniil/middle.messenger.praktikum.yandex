import * as Handlebars from 'handlebars/dist/cjs/handlebars';
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
    });
  }
}

const userMessages = [];

const MessagesWrapState = connect((state) => ({
  userMessages: state.messages,
}));
const MessagesWithState = MessagesWrapState(Messages);

const messagesComp = new MessagesWithState('div', {
  PersonId: store.getState().user?.id,
  userMessages,
});
export default messagesComp;
