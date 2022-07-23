import tpl from './tpl';
import './style.less';
import conversationComp from '../../components/conversation';
import sidebarComp from '../../components/sidebar';
import Block from '../../utils/block';

class Chats extends Block {
  render() {
    return this.compile(tpl, {
      sidebar: this.props.sidebar,
      conversation: this.props.conversation,
    });
  }
}

export const PageChats = new Chats('div', {
  sidebar: sidebarComp,
  conversation: conversationComp,
});

export default PageChats;
