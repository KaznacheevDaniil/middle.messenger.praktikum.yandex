import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';

export default class InputMsg extends Block {
  render() {
    return this.compile(tpl, {
      placeholder: this.props.placeholder,
      name: this.props.name,
      className: this.props.className,
    });
  }
}
