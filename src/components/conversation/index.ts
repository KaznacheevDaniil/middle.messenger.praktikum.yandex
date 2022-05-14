import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";

export default class Conversation extends Block {
  render() {
    return this.compile(tpl, {
      chatTopPanel: this.props.chatTopPanel,
      date: this.props.date,
      messages: this.props.messages,
      chatBottomPanel: this.props.chatBottomPanel,
    });
  }
}
