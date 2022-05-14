import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";

export default class Sidebar extends Block {
  render() {
    return this.compile(tpl, {
      linkToProfile: this.props.linkToProfile,
      search: this.props.search,
      chats: this.props.chats
    });
  }
}
