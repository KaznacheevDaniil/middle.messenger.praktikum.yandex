import Block from '../../utils/block';
import template from './template';
import ProfileFields from '../profile-field';
import { connect } from "../../utils/highOrderComponents";

class Profile extends Block {
  render() {
    return this.compile(template, {
      avatar: this.props.avatar,
      display_name: this.props.display_name,
      profileFieldsInfo: this.props.profileFieldsInfo,
    });
  }
}
const ProfileWrapState = connect(state => ({
  avatar: state.user?.avatar,
  display_name: state.user?.display_name,
}))

const ProfileFieldsWrapState = connect(state => ({
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
    first_name: {
      value: state.user?.first_name,
      nameField: 'Name',
      name: 'first_name',
      disabled: 'disabled',
      valid: true,
    },
    second_name: {
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
  }
}))

const ProfileWithState = ProfileWrapState(Profile)
const ProfileFieldsWithState = ProfileFieldsWrapState(ProfileFields)
const profileFields = {}

const profileComp = new ProfileWithState('div', {
  avatar: '',
  display_name: 'Place for your NickName',
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
