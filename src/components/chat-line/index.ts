import Block from '../../utils/block';
import './style.less';
import template from './template';

class ChatLines extends Block {
  render() {
    return this.compile(template, {
      chatlinePersons: this.props.chatlinePersons,
    });
  }
}

const chatlinePersons = [
  {
    photoPerson: 'https://64.media.tumblr.com/1a62b7ff4fa1aa1dd7d3d11a20768a1f/tumblr_pd3ncatbvc1tawn8uo1_1280.jpg',
    name: 'Daniil ',
    lastMessage: 'Hey, masaddd ddddddddddddddddd ddddddd ddddddddd ddddddddddn!',
    timeLastMessage: '11:32',
    countUnread: '203',
  },
  {
    photoPerson: 'https://64.media.tumblr.com/b9de972d1b72ec08decc0a9e93b9338a/tumblr_prgjn43jHy1tawn8uo1_1280.jpg',
    name: 'Kino',
    lastMessage:
      'Hey,  masaddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd ddddddd ddddddddd man!',
    timeLastMessage: '11:32',
    countUnread: '2',
  },
];

const chatLineComp = new ChatLines('div', { chatlinePersons });
export default chatLineComp;
