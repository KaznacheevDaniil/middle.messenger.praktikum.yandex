import Block from '../../utils/block';
import template from './template';
import Link from '../../components/link';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';
import Validation from '../../utils/validation';

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
    action: '/registration',
    inputs: new Input('div', {
      inputs,
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
          if (event.target.name === 'password') {
            if (!validationForFormInputs.password(event.target.value)) {
              validationForFormInputs.showError(event.target);
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
        const data = {};
        inputFields.forEach((current) => {
          data[current.name] = current.value;
        });
        console.log(data);
      }
    },
  },
});

export default PageReg;
