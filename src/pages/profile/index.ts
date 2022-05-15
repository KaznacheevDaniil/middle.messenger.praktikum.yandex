import tpl from "./tpl";
import "./style.less";
import Link from "../../components/link";
import LinkWithImage from "../../components/link-with-image";
import Modal from "../../components/modal";
import Button from "../../components/button";
import Input from "../../components/input";
import Form from "../../components/form";
import Block from "../../utils/block";
import { profileComp } from "../../components/profile";

const links = [
  {
    className: "link__simple blue",
    hrefLink: "/profile/edit",
    content: "Change info",
  },
  {
    className: "link__simple blue",
    hrefLink: "/profile/change-pwd",
    content: "Change password",
  },
  { className: "link__simple red", hrefLink: "/", content: "Logout" },
];

const inputs = [
  {
    className: "field",
    type: "file",
    placeholder: "file",
    name: "avatar",
    disabled: "disabled",
  },
];

export class PageProfile extends Block {
  render() {
    return this.compile(tpl, {
      profile: this.props.profile,
      link: this.props.link,
      backUrl: this.props.backUrl,
      modal: this.props.modal,
      events: this.props.events,
    });
  }
}

export const page = new PageProfile("div", {
  profile: profileComp,
  link: new Link("div", {
    links,
    attr: {
      class: "options",
    },
  }),
  backUrl: new LinkWithImage("div", {
    className: "link-back_blue",
    link: "/chats",
    urlImg:
      "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMzUyIDExNS40IDMzMS4zIDk2IDE2MCAyNTZsMTcxLjMgMTYwIDIwLjctMTkuM0wyMDEuNSAyNTZ6IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=",
  }),
  modal: new Modal("div", {
    header: "Input file",
    content: new Form("div", {
      action: "/change-avatar",
      inputs: new Input("div", { inputs }),
      button: new Button("div", {
        id: "saveImg",
        type: "submit",
        value: "save",
      }),
    }),
    attr: {
      id: "changeProfileModal",
      class: "modal-wrapper",
    },
    events: {
      click: (event) => {
        if (event.target.className === "modal-wrapper") {
          document.getElementById("changeProfileModal").style.display = "none";
        }
      },
    },
  }),
  events: {},
});
