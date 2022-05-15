import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";
import Link from "../../components/link";

class Page404 extends Block {
  render() {
    return this.compile(tpl, {
      statusCode: this.props.statusCode,
      contentInfoPage: this.props.contentInfoPage,
      wrapper_class: this.props.wrapper_class,
      link: this.props.link,
    });
  }
}

let links: { className: string; hrefLink: string; content: string }[] = [
  {
    className: "link__simple blue",
    hrefLink: "/chats",
    content: "Back to chats",
  },
];

export const page = new Page404("div", {
  statusCode: "404",
  contentInfoPage: "Fix is coming",
  wrapper_class: "page-status_wrapper flex-c",
  link: new Link("div", { links }),
});
