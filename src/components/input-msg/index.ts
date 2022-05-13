import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("inputMsg", tpl);

export default (className : string, name : string, placeholder : string, required : string) => {
  return tpl({ className, name, placeholder, required });
};
