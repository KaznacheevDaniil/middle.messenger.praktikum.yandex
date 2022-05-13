import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("conversation", tpl);

export default (chatTopPanel : HTMLElement, date : string, messages, chatBottomPanel) => {
  return tpl({ chatTopPanel, date, messages, chatBottomPanel });
};
