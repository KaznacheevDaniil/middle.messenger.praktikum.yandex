import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("linkWithImage", tpl);

export default (className, link, urlImg) => {
  return tpl({ className, link, urlImg });
};
