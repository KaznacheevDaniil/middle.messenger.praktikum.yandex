import Block from '../../utils/block';
import template from './template';
import ProfileFields from '../profile-field';
import { connect } from '../../utils/highOrderComponents';
import { UserController } from '../../utils/controllers/profile';

class Profile extends Block {
  render() {
    return this.compile(template, {
      avatar: this.props.avatar,
      display_name: this.props.display_name,
      profileFieldsInfo: this.props.profileFieldsInfo,
    });
  }
}

UserController.getUser();

const ProfileWrapState = connect((state) => ({
  avatar: `https://ya-praktikum.tech/api/v2/resources${state.user?.avatar}`,
}));

const ProfileFieldsWrapState = connect((state) => ({
  profileFields: {
    email: {
      value: state.user?.email,
      nameField: 'Email',
      name: 'email',
      disabled: 'disabled',
      valid: true,
    },
    login: {
      value: state.user?.login,
      nameField: 'Login',
      name: 'login',
      disabled: 'disabled',
      valid: true,
    },
    displayName: {
      value: state.user?.display_name,
      nameField: 'Nickname',
      name: 'display_name',
      disabled: 'disabled',
      valid: true,
    },
    firstName: {
      value: state.user?.first_name,
      nameField: 'Name',
      name: 'first_name',
      disabled: 'disabled',
      valid: true,
    },
    secondName: {
      value: state.user?.second_name,
      nameField: 'Surname',
      name: 'second_name',
      disabled: 'disabled',
      valid: true,
    },
    phone: {
      value: state.user?.phone,
      nameField: 'Phone',
      name: 'phone',
      disabled: 'disabled',
      valid: true,
    },
  },
}));

const ProfileWithState = ProfileWrapState(Profile);
const ProfileFieldsWithState = ProfileFieldsWrapState(ProfileFields);
const profileFields = {};

const profileComp = new ProfileWithState('div', {
  avatar: '',
  profileFieldsInfo: new ProfileFieldsWithState('div', {
    profileFields,
  }),
  events: {
    click: (event) => {
      if (event.target.id === 'changeAvatar') {
        document.getElementById('changeProfileModal').style.display = 'flex';
      }
    },
  },
});

export default profileComp;
