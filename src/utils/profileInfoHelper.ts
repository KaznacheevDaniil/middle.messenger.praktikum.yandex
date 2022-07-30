export default class ProfileinfoHelper {
  private profileInfoPrepared = {
    avatar: {
      placeholder: '',
      nameField: 'Avatar',
      name: 'avatar',
      disabled: undefined,
    },
    email: {
      placeholder: '',
      nameField: 'Email',
      name: 'email',
      disabled: undefined,
      valid: true,
    },
    login: {
      placeholder: '',
      nameField: 'Login',
      name: 'login',
      disabled: undefined,
      valid: true,
    },
    first_name: {
      placeholder: '',
      nameField: 'Name',
      name: 'first_name',
      disabled: undefined,
      valid: true,
    },
    second_name: {
      placeholder: '',
      nameField: 'Surname',
      name: 'second_name',
      disabled: undefined,
      valid: true,
    },
    display_name: {
      placeholder: '',
      nameField: 'Nickname',
      name: 'display_name',
      disabled: undefined,
    },
    phone: {
      placeholder: '',
      nameField: 'Phone',
      name: 'phone',
      disabled: undefined,
      valid: true,
    },
  };

  private profilePassword = {
    oldPassword: {
      placeholder: 'Old password...',
      type: 'text',
      nameField: 'Current password',
      name: 'currentPassword',
      disabled: undefined,
      valid: true,
    },
    newPassword: {
      placeholder: 'New password...',
      type: 'text',
      nameField: 'New password',
      name: 'password',
      disabled: undefined,
      valid: true,
    },
    confirmPassword: {
      placeholder: 'Confirm password...',
      type: 'password',
      nameField: 'Сonfirm password',
      name: 'confirmPassword',
      disabled: undefined,
      valid: true,
    },
  };

  private profileInfo = {
    avatar: 'https://64.media.tumblr.com/c7e94c9d66601db8b5c545b366063c2f/tumblr_pr6ux1VuJ81tawn8uo1_1280.jpg',
    email: 'text@mail.ru',
    login: 'DKaznach',
    first_name: 'Daniil',
    second_name: 'Kaznacheev',
    display_name: 'Dan',
    phone: '8800557673535',
    password: 'sad24sfsdf',
  };

  constructor(disabled = false) {
    Object.keys(this.profileInfo).forEach((key) => {
      if (key === 'password') return;
      if (disabled) {
        this.profileInfoPrepared[key].disabled = 'disabled';
      }
      this.profileInfoPrepared[key].placeholder = this.profileInfo[key];
      this.profileInfoPrepared[key].value = this.profileInfo[key];
    });
  }

  getFieldsWithoutAvatar = (): object => {
    const profileInfoWithOutAvatar = {};

    Object.keys(this.profileInfoPrepared).forEach((key) => {
      profileInfoWithOutAvatar[key] = this.profileInfoPrepared[key];
    });
    return profileInfoWithOutAvatar;
  };

  getValue = (value: string): string => this.profileInfoPrepared[value].placeholder;

  getPasswordChangeInfo = (): object => this.profilePassword;
}
