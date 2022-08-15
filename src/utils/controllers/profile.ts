import { UserInfoAPI } from '../api/user-info.api';
import { logOutAPI } from '../api/logout.api';
import store from '../store';
import Router from '../router';
import { avatarAPI } from '../api/avatar.api';
import { changeUserInfoAPI } from '../api/change-user-info.api';
import { changeUserPwdAPI } from '../api/change-user-pwd.api';
import { displayFormLog } from '../formLogger';

const router = new Router('.app');

interface responseModel {
  status: number;
  responseText: string;
}

export class UserController {
  static getUser() {
    UserInfoAPI.request()
      .then((data : responseModel) => {
        store.set('user', JSON.parse(data.responseText));
      });
  }

  static logoutUser() {
    logOutAPI.request()
      .then((data) => {
        router.go('/');
      });
  }

  static changeUserAvatar(data, form) {
    avatarAPI.change(data).then((response : responseModel) => {
      if (response.status === 200) {
        displayFormLog(form, 'Avatar was changed!', true);
        this.getUser();
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }

  static changeUserProfileData(data, form) {
    changeUserInfoAPI.change(data).then((response: responseModel) => {
      if (response.status === 200) {
        displayFormLog(form, 'Profile data was changed!', true);
        this.getUser();
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }

  static changeUserPassword(data, form) {
    changeUserPwdAPI.change(data).then((response: responseModel) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }
}
