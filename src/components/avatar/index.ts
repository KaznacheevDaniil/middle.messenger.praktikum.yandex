import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";

export default class Avatar extends Block {
  render() {
    return this.compile(tpl, {
      photoPerson: this.props.photoPerson,
    });
  }
}
