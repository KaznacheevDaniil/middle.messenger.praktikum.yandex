import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';
import Avatar from '../avatar';

class ChatLines extends Block {
  render() {
    return this.compile(tpl, {
      chatlinePersons: this.props.chatlinePersons,
    });
  }
}

const chatlinePersons = [
  {
    photoPerson: new Avatar('div', {
      photoPerson: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg',
    }),
    name: 'Daniil ',
    lastMessage: 'Hey, masaddd ddddddddddddddddd ddddddd ddddddddd ddddddddddn!',
    timeLastMessage: '11:32',
    countUnread: '203',
  },
  {
    photoPerson: new Avatar('div', {
      photoPerson: 'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg',
    }),
    name: 'Kino',
    lastMessage:
      'Hey,  masaddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd ddddddd ddddddddd man!',
    timeLastMessage: '11:32',
    countUnread: '2',
  },
];

const chatLineComp = new ChatLines('div', { chatlinePersons });
export default chatLineComp;
