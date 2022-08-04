import { SignInAPI } from '../api/sign-in.api';
import Router from '../router';
import { UserInfoAPI } from '../api/user-info.api';
import { displayFormLog } from '../formLogger';

const router = new Router('.app');

interface LoginFormModel {
  login: string;
  password: string;
}

export class UserLoginController {
  static login(data: LoginFormModel, form) {
    SignInAPI.request(data).then((response) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
        UserInfoAPI.request()
          .then(() => {
            router.go('/messenger');
          });
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }
}