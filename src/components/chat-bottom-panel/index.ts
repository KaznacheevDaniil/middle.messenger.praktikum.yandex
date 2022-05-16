import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';

export default class ChatBottomPanel extends Block {
  render() {
    return this.compile(tpl, {
      form: this.props.form,
    });
  }
}
