import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("inputMsg", tpl);

export default (className, name, placeholder, required) => {
  return tpl({ className, name, placeholder, required });
};
