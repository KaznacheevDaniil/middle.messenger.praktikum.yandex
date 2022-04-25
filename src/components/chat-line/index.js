import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("chatline", tpl);

export default (chatlinePersons) => {
  return tpl({ chatlinePersons });
};
