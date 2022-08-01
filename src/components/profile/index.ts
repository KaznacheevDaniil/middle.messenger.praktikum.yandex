import Block from '../../utils/block';
import template from './template';
import ProfileFields from '../profile-field';
import { connect } from "../../utils/highOrderComponents";
import store, { StoreEvents } from "../../utils/store";
import { UserController } from "../../utils/controllers/profile";

class Profile extends Block {
  render() {
    return this.compile(template, {
      avatar: this.props.avatar,
      display_name: this.props.display_name,
      profileFieldsInfo: this.props.profileFieldsInfo,
    });
  }
}


const profileFields = {
  avatar: {
    placeholder: 'Your avatar is Empty!',
    nameField: 'Avatar',
    name: 'avatar',
    disabled: 'disabled',
  },
  email: {
    placeholder: '',
    nameField: 'Email',
    name: 'email',
    disabled: 'disabled',
    valid: true,
  },
  login: {
    placeholder: '',
    nameField: 'Login',
    name: 'login',
    disabled: 'disabled',
    valid: true,
  },
  first_name: {
    placeholder: '',
    nameField: 'Name',
    name: 'first_name',
    disabled: 'disabled',
    valid: true,
  },
  second_name: {
    placeholder: '',
    nameField: 'Surname',
    name: 'second_name',
    disabled: 'disabled',
    valid: true,
  },
  display_name: {
    placeholder: 'Your nickname is Empty!',
    nameField: 'Nickname',
    name: 'display_name',
    disabled: 'disabled',
  },
  phone: {
    placeholder: '',
    nameField: 'Phone',
    name: 'phone',
    disabled: 'disabled',
    valid: true,
  },
};

const profileComp = new Profile('div', {
  avatar: profileFields.avatar.placeholder,
  display_name: profileFields.display_name.placeholder,
  profileFieldsInfo: new ProfileFields('div', { profileFields }),
  events: {
    click: (event) => {
      if (event.target.id === 'changeAvatar') {
        document.getElementById('changeProfileModal').style.display = 'flex';
      }
    },
  },
});

export default profileComp;
