export default class ProfileinfoHelper {
  private profileInfoPrepared = {
    avatar: {
      placeholder: "",
      nameField: "Avatar",
      name: "avatar",
      disabled: undefined,
    },
    email: {
      placeholder: "",
      nameField: "Email",
      name: "email",
      disabled: undefined,
      valid: true,
    },
    login: {
      placeholder: "",
      nameField: "Login",
      name: "login",
      disabled: undefined,
      valid: true,
    },
    first_name: {
      placeholder: "",
      nameField: "Name",
      name: "first_name",
      disabled: undefined,
      valid: true,
    },
    second_name: {
      placeholder: "",
      nameField: "Surname",
      name: "second_name",
      disabled: undefined,
      valid: true,
    },
    display_name: {
      placeholder: "",
      nameField: "Nickname",
      name: "display_name",
      disabled: undefined,
    },
    phone: {
      placeholder: "",
      nameField: "Phone",
      name: "phone",
      disabled: undefined,
      valid: true,
    },
  };

  private profilePassword = {
    oldPassword: {
      placeholder: "Old password...",
      type: "text",
      nameField: "Current password",
      name: "current-password",
      disabled: undefined,
      valid: true,
    },
    newPassword: {
      placeholder: "New password...",
      type: "text",
      nameField: "New password",
      name: "password",
      disabled: undefined,
      valid: true,
    },
    confirmPassword: {
      placeholder: "Confirm password...",
      type: "password",
      nameField: "Сonfirm password",
      name: "сonfirm-password",
      disabled: undefined,
      valid: true,
    },
  };
  private profileInfo = {
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",
    email: "text@mail.ru",
    login: "DKaznach",
    first_name: "Daniil",
    second_name: "Kaznacheev",
    display_name: "Dan",
    phone: "8 (800) 555 35 35",
    password: "sad24sfsdf",
  };

  constructor(disabled: boolean = false) {
    for (let key in this.profileInfo) {
      if (key === "password") return;
      if (disabled) {
        this.profileInfoPrepared[key].disabled = "disabled";
      }
      this.profileInfoPrepared[key].placeholder = this.profileInfo[key];
      this.profileInfoPrepared[key].value = this.profileInfo[key];
    }
  }

  getFieldsWithoutAvatar = (): object => {
    let profileInfoWithOutAvatar = {};
    for (let key in this.profileInfoPrepared) {
      if (key === "avatar") continue;
      profileInfoWithOutAvatar[key] = this.profileInfoPrepared[key];
    }
    return profileInfoWithOutAvatar;
  };

  getValue = (value: string): string => {
    return this.profileInfoPrepared[value].placeholder;
  };
  getPasswordChangeInfo = (): object => {
    return this.profilePassword;
  };
}
