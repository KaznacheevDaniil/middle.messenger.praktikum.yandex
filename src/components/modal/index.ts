import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";

export default class ProfileField extends Block {
  render() {
    return this.compile(tpl, {
      header: this.props.header,
      content: this.props.content,
      button: this.props.button,
      attr: this.props.attr,
    });
  }
}
