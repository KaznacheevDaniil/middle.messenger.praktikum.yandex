import Block from '../../../utils/block';
import template from './template';
import LinkWithImage from '../../../components/link-with-image';
import Form from '../../../components/form';
import Button from '../../../components/button';
import { Validation } from '../../../utils/validation';
import ProfileFields from '../../../components/profile-field';
import { connect } from '../../../utils/highOrderComponents';
import { UserController } from '../../../utils/controllers/profile';
import ButtonWithImage from '../../../components/button-with-image';
import Router from '../../../utils/router';

const ProfileFieldsWrapState = connect((state) => ({
  profileFields: {
    email: {
      value: state.user?.email,
      nameField: 'Email',
      name: 'email',
      disabled: undefined,
      valid: true,
    },
    login: {
      value: state.user?.login,
      nameField: 'Login',
      name: 'login',
      disabled: undefined,
      valid: true,
    },
    display_name: {
      value: state.user?.display_name,
      nameField: 'Nickname',
      name: 'display_name',
      disabled: undefined,
    },
    first_name: {
      value: state.user?.first_name,
      nameField: 'Name',
      name: 'first_name',
      disabled: undefined,
      valid: true,
    },
    second_name: {
      value: state.user?.second_name,
      nameField: 'Surname',
      name: 'second_name',
      disabled: undefined,
      valid: true,
    },
    phone: {
      value: state.user?.phone,
      nameField: 'Phone',
      name: 'phone',
      disabled: undefined,
      valid: true,
    },
  },
}));

const ProfileFieldsWithState = ProfileFieldsWrapState(ProfileFields);
const profileFields = {};

class EditProfile extends Block {
  render() {
    return this.compile(template, {
      form: this.props.form,
      backUrl: this.props.backUrl,
      events: this.props.events,
    });
  }
}

const PageEditProfile = new EditProfile('div', {
  form: new Form('div', {
    name: 'Edit profile',
    inputs: new ProfileFieldsWithState('div', {
      profileFields,
      events: {
        focus: (event) => {
          Validation.hideError(event.target);
        },
        blur: (event) => {
          if (event.target.name === 'phone') {
            if (!Validation.phone(event.target.value)) {
              Validation.showError(event.target);
            }
          }
          if (event.target.name === 'email') {
            if (!Validation.email(event.target.value)) {
              Validation.showError(event.target);
            }
          }
          if (event.target.name === 'login') {
            if (!Validation.login(event.target.value)) {
              Validation.showError(event.target);
            }
          }
          if (event.target.name === 'first_name' || event.target.name === 'second_name') {
            if (!Validation.names(event.target.value)) {
              Validation.showError(event.target);
            }
          }
        },
      },
    }),
    button: new Button('div', { id: 'save', type: 'submit', value: 'Save' }),
    events: {
      submit: (event) => {
        event.preventDefault();
        if (Validation.check(event.target)) {
          const inputs = event.target.querySelectorAll('input');
          const data = {};
          inputs.forEach((current) => {
            data[current.name] = current.value;
          });
          UserController.changeUserProfileData(data, event.target);
        }
      },
    },
  }),
  backUrl: new ButtonWithImage('div', {
    className: 'link-back_blue flex-c',
    imgLink:
      'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMzUyIDExNS40IDMzMS4zIDk2IDE2MCAyNTZsMTcxLjMgMTYwIDIwLjctMTkuM0wyMDEuNSAyNTZ6IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=',
    events: {
      click: (event) => {
        const router = new Router('.app');
        router.back();
      },
    },

  }),
});
export default PageEditProfile;
