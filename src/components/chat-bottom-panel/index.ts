import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class ChatBottomPanel extends Block {
  render() {
    return this.compile(template, {
      form: this.props.form,
    });
  }
}
