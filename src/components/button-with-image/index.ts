import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class ButtonWithImage extends Block {
  render() {
    return this.compile(template, {
      className: this.props.className,
      type: this.props.type,
      imgLink: this.props.imgLink,
    });
  }
}
