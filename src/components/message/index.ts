import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";
import Handlebars from "handlebars";

Handlebars.registerHelper("isAuthor", function (value, Author) {
  return value == Author;
});

class Messages extends Block {
  render() {
    return this.compile(tpl, {
      messages: this.props.messages,
      date: this.props.date,
    });
  }
}

let messages = [
  {
    author: "Person",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    time: "12:32",
    status: "read",
  },
  { author: "Person", message: "sadasdasd", time: "12:32", status: "read" },
  { author: "Person", message: "sadasdasd", time: "12:32", status: "read" },
  { author: "User", message: "Hi, man!", time: "12:32", status: "unread" },
];

let messagesComp = new Messages("div", { messages, date: "25 september 2019" });
export { messagesComp };
