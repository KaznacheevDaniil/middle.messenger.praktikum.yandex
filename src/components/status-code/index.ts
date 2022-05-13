import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("statusCode", tpl);

export default (statusCode : string) => {
  return tpl({ statusCode });
};
