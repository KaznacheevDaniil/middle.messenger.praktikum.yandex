import template from './template';
import ProfileFields from '../../../components/profile-field';
import LinkWithImage from '../../../components/link-with-image';
import Button from '../../../components/button';
import Form from '../../../components/form';
import { Validation } from '../../../utils/validation';
import Block from '../../../utils/block';
import { UserController } from '../../../utils/controllers/profile';

const profileFields = {
  oldPassword: {
    placeholder: 'Old password...',
    type: 'text',
    nameField: 'Current password',
    name: 'oldPassword',
    disabled: undefined,
    valid: true,
  },
  newPassword: {
    placeholder: 'New password...',
    type: 'text',
    nameField: 'New password',
    name: 'newPassword',
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

class ChangePassword extends Block {
  render() {
    return this.compile(template, {
      form: this.props.form,
      backUrl: this.props.backUrl,
      events: this.props.events,
    });
  }
}

const PageChangePassword = new ChangePassword('div', {
  form: new Form('div', {
    name: 'Edit profile',
    inputs: new ProfileFields('div', {
      profileFields,
      events: {
        focus: (event) => {
          Validation.hideError(event.target);
        },
        blur: (event) => {
          let errors : string[] = [];
          if (event.target.name === 'newPassword') {
            errors = Validation.password(event.target.value);
            if (errors.length > 0) {
              Validation.showError(event.target, errors);
              errors = [];
            }
          }
          if (event.target.name === 'confirmPassword') {
            errors = Validation.confirmPassword(event.target, event.target.value);
            if (errors.length > 0) {
              Validation.showError(event.target, errors);
              errors = [];
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
          const inputs = event.target.querySelectorAll('input[name="newPassword"], input[name="oldPassword"]');
          const data = {};
          inputs.forEach((current) => {
            data[current.name] = current.value;
          });
          UserController.changeUserPassword(data, event.target);
        }
      },
    },
  }),
  backUrl: new LinkWithImage('div', {
    className: 'link-back_blue',
    link: '/profile',
    urlImg:
      'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMzUyIDExNS40IDMzMS4zIDk2IDE2MCAyNTZsMTcxLjMgMTYwIDIwLjctMTkuM0wyMDEuNSAyNTZ6IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=',
  }),
});
export default PageChangePassword;
