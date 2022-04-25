import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("sidebar", tpl);

export default (linkToProfile, search, chats) => {
  return tpl({ linkToProfile, search, chats });
};
