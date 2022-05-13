import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("sidebar", tpl);

export default (linkToProfile: HTMLElement, search: HTMLElement, chats: HTMLElement) => {
  return tpl({ linkToProfile, search, chats });
};
