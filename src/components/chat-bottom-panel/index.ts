import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';

export default class ChatBottomPanel extends Block {
  render() {
    return this.compile(tpl, {
      addFileBtn: this.props.addFileBtn,
      input: this.props.input,
      sendMsgBtn: this.props.sendMsgBtn,
    });
  }
}
