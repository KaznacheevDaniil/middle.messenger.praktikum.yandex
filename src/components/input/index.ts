import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("input", tpl);

interface Inputs {
  className: string,
  placeholder: string,
  label?: string,
  name: string,
  required: string,
}

export default (inputs : Array<Inputs>) => {
  return tpl({ inputs });
};
