import template from './template';
import './style.less';
import Link from '../../components/link';
import Modal from '../../components/modal';
import Button from '../../components/button';
import Input from '../../components/input';
import Form from '../../components/form';
import Block from '../../utils/block';
import profileComp from '../../components/profile';
import { UserController } from '../../utils/controllers/profile';
import Router from '../../utils/router';
import ButtonWithImage from '../../components/button-with-image';

const links = [
  {
    className: 'link__simple change-info-link blue',
    content: 'Change info',
  },
  {
    className: 'link__simple change-pwd-link blue',
    content: 'Change password',
  },
  { className: 'link__simple red logout', content: 'Logout' },
];

class Profile extends Block {
  render() {
    return this.compile(template, {
      profile: this.props.profile,
      link: this.props.link,
      backUrl: this.props.backUrl,
      modal: this.props.modal,
      events: this.props.events,
    });
  }
}

const PageProfile = new Profile('div', {
  profile: profileComp,
  link: new Link('div', {
    links,
    attr: {
      class: 'options',
    },
    events: {
      click: (event) => {
        if (event.target.classList.contains('logout')) {
          UserController.logoutUser();
        }
        if (event.target.classList.contains('change-pwd-link')) {
          const router = new Router('.app');
          router.go('/profile/change-pwd');
        }
        if (event.target.classList.contains('change-info-link')) {
          const router = new Router('.app');
          router.go('/profile/edit');
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
  modal: new Modal('div', {
    header: 'Input file',
    content: new Form('div', {
      inputs: new Input('div', {
        inputs: [
          {
            className: 'field',
            type: 'file',
            placeholder: 'file',
            name: 'avatar',
            disabled: 'disabled',
          },
        ],
      }),
      button: new Button('div', {
        id: 'saveImg',
        type: 'submit',
        value: 'save',
      }),
      events: {
        submit: (event) => {
          event.preventDefault();

          const formData = new FormData(event.target);

          UserController.changeUserAvatar(formData, event.target);
        },
      },
    }),
    attr: {
      id: 'changeAvatarModal',
      class: 'modal-wrapper',
    },
    events: {
      click: (event) => {
        if (event.target.className === 'modal-wrapper') {
          document.getElementById('changeAvatarModal').style.display = 'none';
          try {
            event.target.querySelector('.log-container').textContent = '';
          } catch (event) {
            console.error('changeAvatarModal log-container was not found!');
          }
        }
      },
    },
  }),
  events: {},
});
export default PageProfile;
