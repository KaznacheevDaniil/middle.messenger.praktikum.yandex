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
      id: this.props.id
    });
  }
}

const ChatTopPanelWrapState = connect((state) => ({
  photoChat: state.active?.chat?.avatar,
  nameChat: state.active?.chat?.title,
  id: state.user?.id,
}));
export default ChatTopPanelWrapState(ChatTopPanel);
