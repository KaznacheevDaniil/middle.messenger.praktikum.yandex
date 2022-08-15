import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class InputMsg extends Block {
  render() {
    return this.compile(template, {
      placeholder: this.props.placeholder,
      name: this.props.name,
      className: this.props.className,
      valid: this.props.valid,
      attr: this.props.attr,
    });
  }
}
