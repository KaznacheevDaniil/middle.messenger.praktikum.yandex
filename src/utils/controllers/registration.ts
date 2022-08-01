import { SignUpAPI } from '../api/sign-up.api';
import { UserInfoAPI } from '../api/user-info.api';
import Router from '../router';

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
  static async registration(data: RegFormModel) {
    try {
      // Запускаем крутилку

      const userID = SignUpAPI.create(data).then((response) => {
        if (response.status !== 200 && response.status !== 409) {
          throw new Error('Ошибка регистрации');
        }
      }).then((response) => {
        UserInfoAPI.request()
          .then((response) => JSON.parse(response.responseText))
          .then((response) => {
            console.log('user', response);
            router.go('/messenger');
          });
      });
      // Останавливаем крутилку
    } catch (error) {
      // Логика обработки ошибок
    }
  }
}
