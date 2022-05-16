import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("button", tpl);

export default (id, value, type) => {
  return tpl({ id, value, type });
};
