import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("buttonWithImage", tpl);

export default (value : string, type : string, className : string) => {
  return tpl({ value, type, className });
};
