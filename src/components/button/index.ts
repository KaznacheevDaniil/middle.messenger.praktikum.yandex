import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";

export default class Form extends Block {
  render() {
    return this.compile(tpl, {
      id: this.props.id,
      type: this.props.type,
      value: this.props.value,
    });
  }
}
