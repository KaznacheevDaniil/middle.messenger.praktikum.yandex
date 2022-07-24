import Block from '../../utils/block';
import Validation from '../../utils/validation';
import tpl from './tpl';
import Link from '../../components/link';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';

const inputs = [
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
    label: 'Password',
    type: 'password',
    placeholder: 'Your password',
    name: 'password',
    valid: true,
  },
];

const links = [
  {
    className: 'link__simple blue',
    hrefLink: '/404',
    content: 'Forgot your password?',
  },
  {
    className: 'link__simple blue',
    hrefLink: '/sign-up',
    content: 'Create profile',
  },
];

class Login extends Block {
  render() {
    return this.compile(tpl, {
      form: this.props.form,
      link: this.props.link,
      events: this.props.events,
    });
  }
}
const validationForFormInputs = new Validation();
const PageLogin = new Login('div', {
  form: new Form('div', {
    name: 'Log in',
    action: '/login',
    inputs: new Input('div', {
      inputs,
      events: {
        focus: (event) => {
          validationForFormInputs.hideError(event.target);
        },
        blur: (event) => {
          if (event.target.name === 'login') {
            if (!validationForFormInputs.login(event.target.value)) {
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
    button: new Button('div', { id: 'login', type: 'submit', value: 'Enter' }),
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
  }),
  link: new Link('div', {
    links,
    attr: {
      class: 'f-col ta-c m-pb-10',
    },
  }),
});
export default PageLogin;
