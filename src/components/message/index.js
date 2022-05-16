import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("button", tpl);

Handlebars.registerHelper("isAuthor", function (value, Author) {
  return value == Author;
});

export default (messages) => {
  return tpl({ messages });
};
