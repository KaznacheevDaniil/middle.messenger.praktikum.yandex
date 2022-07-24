import Block from '../../utils/block';
import tpl from './tpl';
import Link from '../../components/link';

class Error500 extends Block {
  render() {
    return this.compile(tpl, {
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

const page500 = new Error500('div', {
  statusCode: '500',
  contentInfoPage: 'You went in the wrong place, marked',
  wrapper_class: 'page-status_wrapper flex-c',
  link: new Link('div', { links }),
});
export default page500;
