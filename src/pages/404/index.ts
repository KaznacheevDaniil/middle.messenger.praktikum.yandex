import Block from '../../utils/block';
import template from './template';
import Link from '../../components/link';

class Error404 extends Block {
  render() {
    return this.compile(template, {
      statusCode: this.props.statusCode,
      contentInfoPage: this.props.contentInfoPage,
      wrapper_class: this.props.wrapper_class,
      link: this.props.link,
    });
  }
}

const links = [
  {
    className: 'link__simple blue',
    hrefLink: '/messenger',
    content: 'Back to chats',
  },
];

const page404 = new Error404('div', {
  statusCode: '404',
  contentInfoPage: 'Fix is coming',
  wrapper_class: 'page-status_wrapper flex-c',
  link: new Link('div', { links }),
});

export default page404;
