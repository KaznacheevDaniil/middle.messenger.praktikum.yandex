import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("conversation", tpl);

export default (chatTopPanel, date, messages, chatBottomPanel) => {
  return tpl({ chatTopPanel, date, messages, chatBottomPanel });
};
