import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("chatTopPanel", tpl);

export default (photoPerson : HTMLElement, namePerson : string, button : HTMLElement) => {
  return tpl({ photoPerson, namePerson, button });
};
