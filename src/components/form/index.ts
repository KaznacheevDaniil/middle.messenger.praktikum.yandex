import Block from '../../utils/block';
import template from './template';

export default class Form extends Block {
  render() {
    return this.compile(template, {
      name: this.props.name,
      action: this.props.action,
      inputs: this.props.inputs,
      button: this.props.button,
    });
  }
}
