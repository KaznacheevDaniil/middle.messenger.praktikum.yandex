import "./style.less";
import { render } from "../src/utils/renderDOM";
import { page as Page404 } from "./pages/404";
import { page as Page500 } from "./pages/500";
import { page as PageLogin } from "./pages/login";
import { page as PageReg } from "./pages/registration";
import { page as PageChats } from "./pages/chats";

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
// if (window.location.pathname == "/profile") {
//   document.getElementById("root").innerHTML = pageProfile;
// }
// if (window.location.pathname == "/profile/edit") {
//   document.getElementById("root").innerHTML = pageProfileEdit;
// }
// if (window.location.pathname == "/profile/change-pwd") {
//   document.getElementById("root").innerHTML = pageProfileChangePwd;
// }

// document.getElementById("changeAvatar").addEventListener("click", () => {
//   document.getElementById("changeProfileModal").style.display = "flex";
// });
// document.getElementById("changeProfileModal").addEventListener("click", (e) => {
//   if (e.target.className === "modal-wrapper") {
//     document.getElementById("changeProfileModal").style.display = "none";
//   }
// });
