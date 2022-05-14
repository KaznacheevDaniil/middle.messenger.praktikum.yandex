import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("linkWithImage", tpl);

export default (className: string, link: string, urlImg: string) => {
  return tpl({ className, link, urlImg });
};
