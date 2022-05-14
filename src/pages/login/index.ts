import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";
import Link from "../../components/link";
import Input from "../../components/input";
import Button from "../../components/button";
import Form from "../../components/form";

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

class PageLogin extends Block {
  render() {
    return this.compile(tpl, {
      form: this.props.form,
      link: this.props.link,
    });
  }
}

export const page = new PageLogin("div", {
  form: new Form("div", {
    name: "Log in",
    action: "/login",
    inputs: new Input("div", { inputs }),
    button: new Button("div", { id: "login", type: "submit", value: "Enter" }),
  }),
  link: new Link("div", { links }),
});

export default { page };
