import template from './template';
import ProfileFields from '../../../components/profile-field';
import LinkWithImage from '../../../components/link-with-image';
import Button from '../../../components/button';
import Form from '../../../components/form';
import Validation from '../../../utils/validation';
import Block from '../../../utils/block';
import ProfileInfoHelper from '../../../utils/profileInfoHelper';

const profileHelper = new ProfileInfoHelper();

const profileFields = profileHelper.getPasswordChangeInfo();

class ChangePassword extends Block {
  render() {
    return this.compile(template, {
      form: this.props.form,
      backUrl: this.props.backUrl,
      events: this.props.events,
    });
  }
}

const validationForFormInputs = new Validation();

const PageChangePassword = new ChangePassword('div', {
  form: new Form('div', {
    name: 'Edit profile',
    action: '/change-pwd',
    inputs: new ProfileFields('div', {
      profileFields,
      events: {
        focus: (event) => {
          validationForFormInputs.hideError(event.target);
        },
        blur: (event) => {
          if (event.target.name === 'password') {
            if (!validationForFormInputs.password(event.target.value)) {
              validationForFormInputs.showError(event.target);
            }
          }
          if (event.target.name === 'сonfirm-password') {
            if (!validationForFormInputs.confirmPassword(event.target, event.target.value)) {
              validationForFormInputs.showError(event.target, "Passwords don't match!");
            }
          }
        },
      },
    }),
    button: new Button('div', { id: 'save', type: 'submit', value: 'Save' }),
    events: {
      submit: (event) => {
        event.preventDefault();
        if (validationForFormInputs.check(event.target)) {
          const inputs = event.target.querySelectorAll('input');
          const data = {};
          inputs.forEach((current) => {
            data[current.name] = current.value;
          });
          console.log(data);
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
