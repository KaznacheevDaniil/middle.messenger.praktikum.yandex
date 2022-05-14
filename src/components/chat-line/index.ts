import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";

export default class ChatLines extends Block {
  render() {
    return this.compile(tpl, {
      chatlinePersons: this.props.chatlinePersons
    });
  }
}
