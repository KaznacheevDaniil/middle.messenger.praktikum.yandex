import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("button", tpl);

Handlebars.registerHelper("isAuthor", function (value, Author) {
  return value == Author;
});

interface Message {
  author: string,
  message: string,
  time: string,
  status: string
}

export default (messages?: Array<Message>) => {
  return tpl({ messages });
};
