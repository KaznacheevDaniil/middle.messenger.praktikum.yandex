import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial("profileFieldInfo", tpl);

// interface ProfileFiels {
//   name: string,
//   type: string,
//   placeholder: string,
//   value: string,
//   disabled: string,
//   required: string
// }

export default (profileFields: object) => {
  return tpl({ profileFields });
};
