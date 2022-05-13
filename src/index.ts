import "./style.less";

import page404 from "./pages/404";
import page500 from "./pages/500";
import pageLogin from "./pages/login";
import pageReg from "./pages/registration";
import pageChats from "./pages/chats";
import pageProfile from "./pages/profile";
import pageProfileEdit from "./pages/profile/edit";
import pageProfileChangePwd from "./pages/profile/change-pwd";

if (window.location.pathname == "/404") {
  document.getElementById("root").innerHTML = page404;
}
if (window.location.pathname == "/500") {
  document.getElementById("root").innerHTML = page500;
}
if (window.location.pathname == "/") {
  document.getElementById("root").innerHTML = pageLogin;
}
if (window.location.pathname == "/reg") {
  document.getElementById("root").innerHTML = pageReg;
}
if (window.location.pathname == "/chats") {
  document.getElementById("root").innerHTML = pageChats;
}
if (window.location.pathname == "/profile") {
  document.getElementById("root").innerHTML = pageProfile;
}
if (window.location.pathname == "/profile/edit") {
  document.getElementById("root").innerHTML = pageProfileEdit;
}
if (window.location.pathname == "/profile/change-pwd") {
  document.getElementById("root").innerHTML = pageProfileChangePwd;
}

// document.getElementById("changeAvatar").addEventListener("click", () => {
//   document.getElementById("changeProfileModal").style.display = "flex";
// });
// document.getElementById("changeProfileModal").addEventListener("click", (e) => {
//   if (e.target.className === "modal-wrapper") {
//     document.getElementById("changeProfileModal").style.display = "none";
//   }
// });
