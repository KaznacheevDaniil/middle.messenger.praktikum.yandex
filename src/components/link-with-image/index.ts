import Block from '../../utils/block';
import template from './template';

export default class LinkWithImage extends Block {
  render() {
    return this.compile(template, {
      className: this.props.className,
      link: this.props.link,
      urlImg: this.props.urlImg,
    });
  }
}
