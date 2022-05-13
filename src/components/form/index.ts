import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";
Handlebars.registerPartial("form", tpl);

export default (action : string, name : string, inputs : HTMLElement, button : string) => {
  return tpl({ action, name, inputs, button });
};
