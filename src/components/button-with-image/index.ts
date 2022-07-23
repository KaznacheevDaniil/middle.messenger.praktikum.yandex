import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';

export default class ButtonWithImage extends Block {
  render() {
    return this.compile(tpl, {
      className: this.props.className,
      type: this.props.type,
      imgLink: this.props.imgLink,
    });
  }
}
