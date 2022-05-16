import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';

export default class LinkWithImage extends Block {
  render() {
    return this.compile(tpl, {
      className: this.props.className,
      link: this.props.link,
      urlImg: this.props.urlImg,
    });
  }
}
