import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class Search extends Block {
  render() {
    return this.compile(template, {
      placeholder: this.props.placeholder,
      className: this.props.className,
    });
  }
}
