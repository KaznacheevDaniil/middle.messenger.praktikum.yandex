import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";

export default class ChatTopPanel extends Block {
  render() {
    return this.compile(tpl, {
      photoPerson: this.props.photoPerson,
      namePerson: this.props.namePerson,
      button: this.props.button,
    });
  }
}
