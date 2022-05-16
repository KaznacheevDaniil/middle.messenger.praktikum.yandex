import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';
import chatLineComp from '../chat-line';
import Link from '../link';
import Search from '../search';

export default class Sidebar extends Block {
  render() {
    return this.compile(tpl, {
      linkToProfile: this.props.linkToProfile,
      search: this.props.search,
      chats: this.props.chats,
      attr: this.props.attr,
    });
  }
}

const links = [
  { className: 'link__profile', hrefLink: '/profile', content: 'profile' },
];

const sidebarComp = new Sidebar('div', {
  linkToProfile: new Link('div', { links }),
  search: new Search('div', {
    placeholder: 'Search...',
    className: 'search',
  }),
  chats: chatLineComp,
  attr: {
    class: 'sidebar',
  },
});
export { sidebarComp };
