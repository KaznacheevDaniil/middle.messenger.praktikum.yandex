import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("profileInfo", tpl);

export default (avatarUrl : string, nickname : string, profileFieldsInfo : HTMLElement) => {
  return tpl({ avatarUrl, nickname, profileFieldsInfo });
};
