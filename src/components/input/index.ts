import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class Input extends Block {
  render() {
    return this.compile(template, {
      inputs: this.props.inputs,
    });
  }
}
