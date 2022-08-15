import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class Form extends Block {
  render() {
    return this.compile(template, {
      id: this.props.id,
      type: this.props.type,
      value: this.props.value,
    });
  }
}
