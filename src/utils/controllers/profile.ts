import { UserInfoAPI } from '../api/user-info.api';
import { logOutAPI } from '../api/logout.api';
import store, { StoreEvents } from '../store';
import Router from '../router';

const router = new Router('.app');

export class UserController {
  static getUser() {
    UserInfoAPI.request()
      .then((data) => {store.set('user', JSON.parse(data.responseText))
      console.log("store.getState() ", store.getState())});
  }

  static logoutUser() {
    logOutAPI.request()
      .then((data) => {
        router.go('/');
      });
  }
}
