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
    label: "Mail",
    type: "email",
    placeholder: "Your email",
    name: "email",
    required: undefined,
  },
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
    label: "Name",
    type: "text",
    placeholder: "Your name",
    name: "first_name",
    required: "required",
  },
  {
    className: "field",
    label: "Surname",
    type: "text",
    placeholder: "Your surname",
    name: "second_name",
    required: undefined,
  },
  {
    className: "field",
    label: "Phone",
    type: "tel",
    placeholder: "Your phone",
    name: "phone",
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
  { className: "link__simple blue", hrefLink: "/", content: "Sign in" },
];

class PageReg extends Block {
  render() {
    return this.compile(tpl, {
      form: this.props.form,
      link: this.props.link,
    });
  }
}

export const page = new PageReg("div", {
  form: new Form("div", {
    name: "Registration",
    action: "/registration",
    inputs: new Input("div", { inputs }),
    button: new Button("div", {
      id: "reg",
      type: "submit",
      value: "Create account",
    }),
  }),
  link: new Link("div", { links }),
});

export default { page };
