import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";

export default class ProfileFields extends Block {
  render() {
    return this.compile(tpl, {
      profileFields: this.props.profileFields,
    });
  }
}
