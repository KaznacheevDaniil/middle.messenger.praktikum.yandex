import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";
import ChatTopPanel from "../chat-top-panel";
import Avatar from "../avatar";
import ButtonWithImage from "../button-with-image";
import { messagesComp } from "../message";
import ChatBottomPanel from "../chat-bottom-panel";
import InputMsg from "../input-msg";

class Conversation extends Block {
  render() {
    return this.compile(tpl, {
      chatTopPanel: this.props.chatTopPanel,
      messages: this.props.messages,
      chatBottomPanel: this.props.chatBottomPanel,
      attr: this.props.attr,
    });
  }
}

let conversationComp = new Conversation("div", {
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
  messages: messagesComp,
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
  attr: {
    class: "conversation",
  },
});
export { conversationComp };
