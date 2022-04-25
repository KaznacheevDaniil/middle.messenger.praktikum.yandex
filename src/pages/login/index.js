import tmpl from "./tpl.hbs";
import "./style.less";
import formComp from "../../components/form";
import inputComp from "../../components/input";
import linkComp from "../../components/link";
import buttonComp from "../../components/button";

const inputs = [
  {
    className: "field",
    label: "Login",
    type: "text",
    placeholder: "Your login",
    name: "login",
    required: "required",
  },
  {
    className: "field",
    label: "Password",
    type: "password",
    placeholder: "Your password",
    name: "password",
    required: "required",
  },
];

const links = [
  {
    className: "link__simple blue",
    hrefLink: "/404",
    content: "Forgot your password?",
  },
  {
    className: "link__simple blue",
    hrefLink: "/reg",
    content: "Create profile",
  },
];

export default tmpl({
  form: formComp(
    "/login",
    "Log in",
    inputComp(inputs),
    buttonComp("login", "Enter", "submit")
  ),
  link: linkComp(links),
});
