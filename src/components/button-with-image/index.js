import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("buttonWithImage", tpl);

export default (value, type, className) => {
  return tpl({ value, type, className });
};
