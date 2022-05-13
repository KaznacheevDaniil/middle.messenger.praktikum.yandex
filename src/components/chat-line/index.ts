import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("chatline", tpl);

interface ChatLine {
  photoPerson: HTMLElement,
  namePerson: string,
  lastMessage: string,
  timeLastMessage: string,
  countUnread: string
}

export default (chatlinePersons : Array<ChatLine>) => {
  return tpl({ chatlinePersons });
};
