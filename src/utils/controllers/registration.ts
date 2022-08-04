import { SignUpAPI } from '../api/sign-up.api';
import { UserInfoAPI } from '../api/user-info.api';
import Router from '../router';
import { displayFormLog } from '../formLogger';
import store from "../store";

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
            if (responseData.status === 200) {
              store.set('user', JSON.parse(responseData.responseText));
              router.go('/messenger')
            }else{
              displayFormLog(form, JSON.parse(responseData.responseText).reason, false);
            }
          });
      } else {
        displayFormLog(form, JSON.parse(response.responseText).reason, false);
      }
    });
  }
}
