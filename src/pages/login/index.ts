import Block from '../../utils/block';
import { Validation } from '../../utils/validation';
import template from './template';
import Link from '../../components/link';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';
import { UserLoginController } from '../../utils/controllers/login';
import { UserInfoAPI } from '../../utils/api/user-info.api';
import Router from '../../utils/router';

const router = new Router('.app');

interface LoginFormModel {
  login: string;
  password: string;
}

const inputs = [
  {
    className: 'field',
    label: 'Login',
    type: 'text',
    placeholder: 'Your login',
    name: 'login',
  },
  {
    className: 'field',
    label: 'Password',
    type: 'password',
    placeholder: 'Your password',
    name: 'password',
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
    return this.compile(template, {
      form: this.props.form,
      link: this.props.link,
      events: this.props.events,
    });
  }

  checkLogin() {
    function onFulfilled() {
      console.log('user', 'onFulfilled');
      router.go('/messenger');
    }

    function onRejected() {
      console.log('user', 'onRejected');
      router.go('/');
    }
    UserInfoAPI.request()
      .then(onFulfilled, onRejected);
  }
}

const PageLogin = new Login('div', {
  form: new Form('div', {
    name: 'Log in',
    inputs: new Input('div', {
      inputs,
    }),
    button: new Button('div', { id: 'login', type: 'submit', value: 'Enter' }),
    events: {
      submit: (event) => {
        event.preventDefault();
        if (Validation.check(event.target)) {
          const inputFields = event.target.querySelectorAll('input');
          const data : LoginFormModel = {
            login: '',
            password: '',
          };

          inputFields.forEach((current) => {
            data[current.name] = current.value;
          });
          UserLoginController.login(data, event.target);
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
