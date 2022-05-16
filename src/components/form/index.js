import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";
Handlebars.registerPartial("form", tpl);

export default (action, name, inputs, button) => {
  return tpl({ action, name, inputs, button });
};
