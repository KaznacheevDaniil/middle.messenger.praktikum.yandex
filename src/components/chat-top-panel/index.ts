import Block from '../../utils/block';
import './style.less';
import template from './template';
import { connect } from '../../utils/highOrderComponents';

class ChatTopPanel extends Block {
  render() {
    return this.compile(template, {
      photoChat: this.props.photoChat,
      nameChat: this.props.nameChat,
      button: this.props.button,
      menu: this.props.menu,
    });
  }
}

const ChatTopPanelWrapState = connect((state) => ({
  photoChat: state.active?.chat?.avatar,
  nameChat: state.active?.chat?.title,
}));
export default ChatTopPanelWrapState(ChatTopPanel);
