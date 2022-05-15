import "./style.less";
import { render } from "../src/utils/renderDOM";
import { page as Page404 } from "./pages/404";
import { page as Page500 } from "./pages/500";
import { page as PageLogin } from "./pages/login";
import { page as PageReg } from "./pages/registration";
import { page as PageChats } from "./pages/chats";
import { page as PageProfile } from "./pages/profile";
import { page as pageChangePassword } from "./pages/profile/change-pwd";
import { page as PageEditProfile } from "./pages/profile/edit";

if (window.location.pathname == "/404") {
  render(".app", Page404);
}
if (window.location.pathname == "/500") {
  render(".app", Page500);
}
if (window.location.pathname == "/") {
  render(".app", PageLogin);
}
if (window.location.pathname == "/reg") {
  render(".app", PageReg);
}
if (window.location.pathname == "/chats") {
  render(".app", PageChats);
}
if (window.location.pathname == "/profile") {
  render(".app", PageProfile);
}
if (window.location.pathname == "/profile/edit") {
  render(".app", PageEditProfile);
}
if (window.location.pathname == "/profile/change-pwd") {
  render(".app", pageChangePassword);
}
