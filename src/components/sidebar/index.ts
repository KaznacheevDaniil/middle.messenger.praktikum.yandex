import Block from '../../utils/block';
import './style.less';
import template from './template';
import chatLineComp from '../chat-line';
import Link from '../link';
import Search from '../search';
import ButtonWithImage from '../button-with-image';
import Menu from '../menu';

class Sidebar extends Block {
  render() {
    return this.compile(template, {
      options: this.props.options,
      linkToProfile: this.props.linkToProfile,
      search: this.props.search,
      chatsList: this.props.chatList,
      list: this.props.list,
      attr: this.props.attr,
    });
  }
}

const links = [
  { className: 'link__profile', hrefLink: '/profile', content: 'Profile' },
];

const sidebarComp = new Sidebar('div', {
  options: new ButtonWithImage('div', {
    className: 'button-option',
    imgLink: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNXB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNSAyNSIgd2lkdGg9IjI1cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iVGFiQmFyLUljb25zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzAwMDAwMCIgaWQ9IkhhbWJ1cmdlci1Sb3VuZCI+PHBhdGggZD0iTTAsNCBDMCwyLjg5NTQzMDUgMC44ODk3NjMyMzYsMiAyLjAwMzU5NDg2LDIgTDIyLjk5NjQwNTEsMiBDMjQuMTAyOTYsMiAyNSwyLjg4NzcyOTY0IDI1LDQgQzI1LDUuMTA0NTY5NSAyNC4xMTAyMzY4LDYgMjIuOTk2NDA1MSw2IEwyLjAwMzU5NDg2LDYgQzAuODk3MDM5OTc0LDYgMCw1LjExMjI3MDM2IDAsNCBMMCw0IFogTTAsMTIgQzAsMTAuODk1NDMwNSAwLjg4OTc2MzIzNiwxMCAyLjAwMzU5NDg2LDEwIEwyMi45OTY0MDUxLDEwIEMyNC4xMDI5NiwxMCAyNSwxMC44ODc3Mjk2IDI1LDEyIEMyNSwxMy4xMDQ1Njk1IDI0LjExMDIzNjgsMTQgMjIuOTk2NDA1MSwxNCBMMi4wMDM1OTQ4NiwxNCBDMC44OTcwMzk5NzQsMTQgMCwxMy4xMTIyNzA0IDAsMTIgTDAsMTIgWiBNMCwyMCBDMCwxOC44OTU0MzA1IDAuODg5NzYzMjM2LDE4IDIuMDAzNTk0ODYsMTggTDIyLjk5NjQwNTEsMTggQzI0LjEwMjk2LDE4IDI1LDE4Ljg4NzcyOTYgMjUsMjAgQzI1LDIxLjEwNDU2OTUgMjQuMTEwMjM2OCwyMiAyMi45OTY0MDUxLDIyIEwyLjAwMzU5NDg2LDIyIEMwLjg5NzAzOTk3NCwyMiAwLDIxLjExMjI3MDQgMCwyMCBMMCwyMCBaIiBpZD0iSGFtYnVyZ2VyIi8+PC9nPjwvZz48L3N2Zz4=',
    events: {
      click: (event) => {
        document.getElementById('SidebarMenu').style.display = 'block';
      },
    },

  }),
  linkToProfile: new Link('div', { links }),
  search: new Search('div', {
    placeholder: 'Search...',
    className: 'search',
  }),
  chatList: chatLineComp,
  menu: new Menu('div', {
    className: 'menu-li',
    listsMenu: [{
      id: 'CreateChat',
      content: 'Create chat',
    }, {
      id: 'DeleteChat',
      content: 'Delete chat',
    }],
    events: {
      click: (event) => {
        if (event.target.id === 'CreateChat') {
          document.getElementById('CreateChatModal').style.display = 'flex';
        }

        if (event.target.id === 'DeleteChat') {
          document.getElementById('DeleteChatModal').style.display = 'flex';
        }
      },
    },
  }),
  attr: {
    class: 'sidebar',
  },
  events: {
    click: (event) => {
      if (event.target.className === 'menu-close') {
        document.getElementById('SidebarMenu').style.display = 'none';
      }
    },
  },
});
export default sidebarComp;
