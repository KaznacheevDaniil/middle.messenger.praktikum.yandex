import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';

export default class Input extends Block {
  render() {
    return this.compile(tpl, {
      inputs: this.props.inputs,
    });
  }
}
