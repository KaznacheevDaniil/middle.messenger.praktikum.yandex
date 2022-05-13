import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("button", tpl);

export default (id : string, value : string, type : string) => {
  return tpl({ id, value, type });
};
