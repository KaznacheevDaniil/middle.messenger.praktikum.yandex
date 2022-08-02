import { SignUpAPI } from '../api/sign-up.api';
import { UserInfoAPI } from '../api/user-info.api';
import Router from '../router';
import { displayFormLog } from '../formLogger';

const router = new Router('.app');

interface RegFormModel {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}

export class UserRegistrationController {
  static registration(data: RegFormModel, form) {
    SignUpAPI.create(data).then((response) => {
      if (response.status === 200) {
        displayFormLog(form, 'Succsessfull', true);
        UserInfoAPI.request()
          .then((responseData) => {
            console.log('user', responseData);
            router.go('/messenger');
          });
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }
}
