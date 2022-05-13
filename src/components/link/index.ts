import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("linkComp", tpl);

interface Links {
  className: string,
  hrefLink: string,
  content: string
}

export default (links : Array<Links>) => {
  return tpl({ links });
};
