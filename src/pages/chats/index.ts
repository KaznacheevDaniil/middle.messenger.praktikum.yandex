import tpl from "./tpl";
import "./style.less";
import Sidebar from "../../components/sidebar";
import ButtonWithImage from "../../components/button-with-image";
import InputMsg from "../../components/input-msg";
import Search from "../../components/search";
import ChatLines from "../../components/chat-line";
import Avatar from "../../components/avatar";
import Link from "../../components/link";
import ChatTopPanel from "../../components/chat-top-panel";
import ChatBottomPanel from "../../components/chat-bottom-panel";
import Messages from "../../components/message";
import Conversation from "../../components/conversation";
import Block from "../../utils/block";

class PageChats extends Block {
  render() {
    return this.compile(tpl, {
      sidebar: this.props.sidebar,
      conversation: this.props.conversation,
    });
  }
}

let links: { className: string; hrefLink: string; content: string }[] = [
  { className: "link__profile", hrefLink: "/profile", content: "profile" }
];
let chatlinePersons = [
  {
    photo: new Avatar("div", {
      photoPerson:
        "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",
    }),
    name: "Daniil ",
    lastMessage:
      "Hey, masaddd ddddddddddddddddd ddddddd ddddddddd ddddddddddn!",
    timeLastMessage: "11:32",
    countUnread: "203",
  },
  {
    photo: new Avatar("div", {
      photoPerson:
        "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg",
    }),
    name: "Kino",
    lastMessage:
      "Hey,  masaddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd ddddddd ddddddddd man!",
    timeLastMessage: "11:32",
    countUnread: "2",
  }
];
let messages = [
  {
    author: "Person",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    time: "12:32",
    status: "read",
  },
  { author: "Person", message: "sadasdasd", time: "12:32", status: "read" },
  { author: "Person", message: "sadasdasd", time: "12:32", status: "read" },
  { author: "User", message: "Hi, man!", time: "12:32", status: "unread" },
];

export const page = new PageChats("div", {
  sidebar: new Sidebar("div", {
    linkToProfile: new Link("div", { links }),
    search: new Search("div", {
      placeholder: "Search...",
      className: "search",
    }),
    chats: new ChatLines("div", { chatlinePersons }),
  }),
  conversation: new Conversation("div", {
    chatTopPanel: new ChatTopPanel("div", {
      photoPerson: new Avatar("div", {
        photoPerson:
          "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",
      }),
      namePerson: "Viktor Evgen",
      button: new ButtonWithImage("div", {
        imgLink:
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wYXBlcmNsaXAiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjQ0IDExLjA1bC05LjE5IDkuMTlhNiA2IDAgMCAxLTguNDktOC40OWw5LjE5LTkuMTlhNCA0IDAgMCAxIDUuNjYgNS42NmwtOS4yIDkuMTlhMiAyIDAgMCAxLTIuODMtMi44M2w4LjQ5LTguNDgiLz48L3N2Zz4=",
        type: "button",
        className: "button-option",
      }),
    }),
    date: "25 september 2019",
    messages: new Messages("div", { messages }),
    chatBottomPanel: new ChatBottomPanel("div", {
      addFileBtn: new ButtonWithImage("div", {
        imgLink:
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wYXBlcmNsaXAiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjQ0IDExLjA1bC05LjE5IDkuMTlhNiA2IDAgMCAxLTguNDktOC40OWw5LjE5LTkuMTlhNCA0IDAgMCAxIDUuNjYgNS42NmwtOS4yIDkuMTlhMiAyIDAgMCAxLTIuODMtMi44M2w4LjQ5LTguNDgiLz48L3N2Zz4=",
        type: "button",
        className: "button-option",
      }),
      input: new InputMsg("div", {
        placeholder: "Wtite message...",
        name: "message",
        className: "input",
        required: "required",
      }),
      sendMsgBtn: new ButtonWithImage("div", {
        imgLink:
          "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjQ3IDMxYTIgMiAwIDAgMS0xLjgtMS4wOWwtNC03LjU3YTEgMSAwIDAgMSAxLjc3LS45M2w0IDcuNTdMMjkgMy4wNiAzIDEyLjQ5bDkuOCA1LjI2IDguMzItOC4zMmExIDEgMCAwIDEgMS40MiAxLjQybC04Ljg1IDguODRhMSAxIDAgMCAxLTEuMTcuMThMMi4wOSAxNC4zM2EyIDIgMCAwIDEgLjI1LTMuNzJsMjUuOTEtOS40OGEyIDIgMCAwIDEgMi42MiAyLjYybC05LjQ4IDI1LjkxQTIgMiAwIDAgMSAxOS42MSAzMVoiIGRhdGEtbmFtZT0iTGF5ZXIgNDUiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSJmaWxsLTEwMTgyMCI+PC9wYXRoPjwvc3ZnPg==",
        type: "button",
        className: "button-primary rounded-img",
      }),
    }),
  }),
});

export default { page };
