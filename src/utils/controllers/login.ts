import { SignInAPI } from '../api/sign-in.api';
import Router from '../router';
import { UserInfoAPI } from '../api/user-info.api';

const router = new Router('.app');

interface LoginFormModel {
  login: string;
  password: string;
}

export class UserLoginController {
  static async login(data: LoginFormModel) {
    try {
      // Запускаем крутилку

      SignInAPI.request(data).then((response) => {
        UserInfoAPI.request()
          .then((response) => {
            if(response.status === 200){

              router.go('/messenger');
              console.log('user', response);
            }
          });
      });

      // Останавливаем крутилку
    } catch (error) {
      // Логика обработки ошибок
    }
  }
}
