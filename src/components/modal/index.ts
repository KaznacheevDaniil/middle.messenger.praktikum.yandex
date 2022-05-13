import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("modal", tpl);

export default (id : string, header : string, content : HTMLElement, button : HTMLElement) => {
  return tpl({ id, header , content, button });
};
