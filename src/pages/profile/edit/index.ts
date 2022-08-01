import Block from '../../../utils/block';
import template from './template';
import LinkWithImage from '../../../components/link-with-image';
import Form from '../../../components/form';
import Button from '../../../components/button';
import Validation from '../../../utils/validation';
import ProfileFields from '../../../components/profile-field';

const profileFields = {
  email: {
    placeholder: 'Example@mail.ru',
    nameField: 'Email',
    name: 'email',
    disabled: undefined,
    valid: true,
  },
  login: {
    placeholder: 'VasyDAsd_',
    nameField: 'Login',
    name: 'login',
    disabled: undefined,
    valid: true,
  },
  first_name: {
    placeholder: 'Daniil',
    nameField: 'Name',
    name: 'first_name',
    disabled: undefined,
    valid: true,
  },
  second_name: {
    placeholder: 'Kaznacheev',
    nameField: 'Surname',
    name: 'second_name',
    disabled: undefined,
    valid: true,
  },
  display_name: {
    placeholder: 'DaniilK',
    nameField: 'Nickname',
    name: 'display_name',
    disabled: 'disabled',
  },
  phone: {
    placeholder: '88005553535',
    nameField: 'Phone',
    name: 'phone',
    disabled: undefined,
    valid: true,
  },
}

class EditProfile extends Block {
  render() {
    return this.compile(template, {
      form: this.props.form,
      backUrl: this.props.backUrl,
      events: this.props.events,
    });
  }
}

const validationForFormInputs = new Validation();

const PageEditProfile = new EditProfile('div', {
  form: new Form('div', {
    name: 'Edit profile',
    action: '/edit',
    inputs: new ProfileFields('div', {
      profileFields,
      events: {
        focus: (event) => {
          validationForFormInputs.hideError(event.target);
        },
        blur: (event) => {
          if (event.target.name === 'phone') {
            if (!validationForFormInputs.phone(event.target.value)) {
              validationForFormInputs.showError(event.target);
            }
          }
          if (event.target.name === 'email') {
            if (!validationForFormInputs.email(event.target.value)) {
              validationForFormInputs.showError(event.target);
            }
          }
          if (event.target.name === 'login') {
            if (!validationForFormInputs.login(event.target.value)) {
              validationForFormInputs.showError(event.target);
            }
          }
          if (event.target.name === 'first_name' || event.target.name === 'second_name') {
            if (!validationForFormInputs.names(event.target.value)) {
              validationForFormInputs.showError(event.target);
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
export default PageEditProfile;
