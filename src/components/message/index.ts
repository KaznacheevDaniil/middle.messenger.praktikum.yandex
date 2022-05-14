import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";
import Handlebars from "handlebars";

Handlebars.registerHelper("isAuthor", function (value, Author) {
  return value == Author;
});

export default class Messages extends Block {
  render() {
    return this.compile(tpl, {
      messages: this.props.messages
    });
  }
}
