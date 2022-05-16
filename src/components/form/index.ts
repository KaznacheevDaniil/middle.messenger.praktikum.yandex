import Block from '../../utils/block';
import tpl from './tpl';

export default class Form extends Block {
  render() {
    return this.compile(tpl, {
      name: this.props.name,
      action: this.props.action,
      inputs: this.props.inputs,
      button: this.props.button,
    });
  }
}
