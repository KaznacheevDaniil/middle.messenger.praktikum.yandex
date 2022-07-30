import './style.less';
import Router from './utils/router';
import Page404 from './pages/404';
import Page500 from './pages/500';
import PageLogin from './pages/login';
import PageReg from './pages/registration';
import PageChats from './pages/chats';
import PageProfile from './pages/profile';
import pageChangePassword from './pages/profile/change-pwd';
import PageEditProfile from './pages/profile/edit';

const router = new Router('.app');

router
  .use('/', PageLogin)
  .use('/500', Page500)
  .use('/404', Page404)
  .use('/sign-up', PageReg)
  .use('/messenger', PageChats)
  .use('/profile', PageProfile)
  .use('/profile/edit', PageEditProfile)
  .use('/profile/change-pwd', pageChangePassword)
  .start();
