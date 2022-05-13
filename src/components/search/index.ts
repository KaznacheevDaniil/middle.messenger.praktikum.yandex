import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("search", tpl);

export default (className : string, placeholder : string) => {
  return tpl({ className, placeholder });
};
