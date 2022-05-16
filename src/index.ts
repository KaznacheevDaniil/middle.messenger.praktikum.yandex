import './style.less';
import render from './utils/renderDOM';
import Page404 from './pages/404';
import Page500 from './pages/500';
import PageLogin from './pages/login';
import PageReg from './pages/registration';
import PageChats from './pages/chats';
import PageProfile from './pages/profile';
import pageChangePassword from './pages/profile/change-pwd';
import PageEditProfile from './pages/profile/edit';

if (window.location.pathname === '/404') {
  render('.app', Page404);
}
if (window.location.pathname === '/500') {
  render('.app', Page500);
}
if (window.location.pathname === '/') {
  render('.app', PageLogin);
}
if (window.location.pathname === '/reg') {
  render('.app', PageReg);
}
if (window.location.pathname === '/chats') {
  render('.app', PageChats);
}
if (window.location.pathname === '/profile') {
  render('.app', PageProfile);
}
if (window.location.pathname === '/profile/edit') {
  render('.app', PageEditProfile);
}
if (window.location.pathname === '/profile/change-pwd') {
  render('.app', pageChangePassword);
}
