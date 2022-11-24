import { SignInAPI } from '../api/sign-in.api';
import Router from '../router';
import { UserInfoAPI } from '../api/user-info.api';
import { displayFormLog } from '../formLogger';
import store from '../store';

const router = new Router('.app');

interface LoginFormModel {
  login: string;
  password: string;
}

interface responseModel {
  status: number;
  responseText: string;
}

export class UserLoginController {
  static login(data: LoginFormModel, form) {
    SignInAPI.request(data).then((response : responseModel) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
        UserInfoAPI.request()
          .then((responseData : responseModel) => {
            if (responseData.status === 200) {
              store.set('user', JSON.parse(responseData.responseText));
              router.go('/messenger');
            } else {
              displayFormLog(form, JSON.parse(responseData.responseText).reason, false);
            }
          });
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }
}
