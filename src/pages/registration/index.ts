import Block from '../../utils/block';
import template from './template';
import Link from '../../components/link';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';
import Validation from '../../utils/validation';
import { UserRegistrationController } from '../../utils/controllers/registration';

interface RegFormModel {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}

const inputs = [
  {
    className: 'field',
    label: 'Mail',
    type: 'email',
    placeholder: 'Your email',
    name: 'email',
    valid: true,
  },
  {
    className: 'field',
    label: 'Login',
    type: 'text',
    placeholder: 'Your login',
    name: 'login',
    valid: true,
  },
  {
    className: 'field',
    label: 'Name',
    type: 'text',
    placeholder: 'Your name',
    name: 'first_name',
    valid: true,
  },
  {
    className: 'field',
    label: 'Surname',
    type: 'text',
    placeholder: 'Your surname',
    name: 'second_name',
    valid: true,
  },
  {
    className: 'field',
    label: 'Phone',
    type: 'tel',
    placeholder: 'Your phone',
    name: 'phone',
    valid: true,
  },
  {
    className: 'field',
    label: 'Password',
    type: 'password',
    placeholder: 'Your password',
    name: 'password',
    valid: true,
  },
];

const links = [{ className: 'link__simple blue', hrefLink: '/', content: 'Sign in' }];

class Registration extends Block {
  render() {
    return this.compile(template, {
      form: this.props.form,
      link: this.props.link,
      events: this.props.events,
    });
  }
}
const validationForFormInputs = new Validation();
const PageReg = new Registration('div', {
  form: new Form('div', {
    name: 'Registration',
    inputs: new Input('div', {
      inputs,
      events: {
        focus: (event) => {
          validationForFormInputs.hideError(event.target);
        },
        blur: (event) => {
          let errors : string[] = [];
          if (event.target.name === 'phone') {
            if (!validationForFormInputs.phone(event.target.value)) {
              validationForFormInputs.showError(event.target);
              errors = [];
            }
          }
          if (event.target.name === 'email') {
            errors = validationForFormInputs.email(event.target.value);
            if (errors.length > 0) {
              validationForFormInputs.showError(event.target, errors);
              errors = [];
            }
          }
          if (event.target.name === 'login') {
            errors = validationForFormInputs.names(event.target.value);
            if (errors.length > 0) {
              validationForFormInputs.showError(event.target, errors);
              errors = [];
            }
          }
          if (event.target.name === 'first_name' || event.target.name === 'second_name') {
            errors = validationForFormInputs.names(event.target.value);
            if (errors.length > 0) {
              validationForFormInputs.showError(event.target, errors);
              errors = [];
            }
          }
          if (event.target.name === 'password') {
            errors = validationForFormInputs.password(event.target.value);
            if (errors.length > 0) {
              validationForFormInputs.showError(event.target, errors);
              errors = [];
            }
          }
        },
      },
    }),
    button: new Button('div', {
      id: 'reg',
      type: 'submit',
      value: 'Create account',
    }),
  }),
  link: new Link('div', {
    links,
    attr: {
      class: 'm-pb-10',
    },
  }),
  events: {
    submit: (event) => {
      event.preventDefault();
      if (validationForFormInputs.check(event.target)) {
        const inputFields = event.target.querySelectorAll('input');
        const data : RegFormModel = {
          email: '',
          login: '',
          first_name: '',
          second_name: '',
          phone: '',
          password: '',
        };
        inputFields.forEach((current) => {
          data[current.name] = current.value;
        });
        UserRegistrationController.registration(data, event.target);
      }
    },
  },
});

export default PageReg;
