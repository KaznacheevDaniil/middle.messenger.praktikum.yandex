import Block from '../../utils/block';
import './style.less';
import template from './template';
import { connect } from "../../utils/highOrderComponents";
import ProfileFields from "../profile-field";
import chats from "../../pages/chats";

class ChatLines extends Block {
  render() {
    return this.compile(template, {
      chatlinePersons: this.props.chatlinePersons,
    });
  }
}

interface stateChatsModel {
  avatar: string | any;
  created_by: number;
  id: number;
  last_message: string | any;
  title: string;
  unread_count: string | number;
}

const chatlinePersons = [
  {
    photoPerson: 'https://64.media.tumblr.com/1a62b7ff4fa1aa1dd7d3d11a20768a1f/tumblr_pd3ncatbvc1tawn8uo1_1280.jpg',
    name: 'Daniil ',
    lastMessage: 'Hey, masaddd ddddddddddddddddd ddddddd ddddddddd ddddddddddn!',
    timeLastMessage: '11:32',
    countUnread: '203',
  },
];


const ChatLinesWrapState = connect((state) => ({
  chatlinePersons: state.chats
}));

const ChatLinesWithState = ChatLinesWrapState(ChatLines);

const chatLineComp = new ChatLinesWithState('div', { chatlinePersons });
export default chatLineComp;
