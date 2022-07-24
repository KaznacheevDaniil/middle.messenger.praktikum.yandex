import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class ProfileField extends Block {
  render() {
    return this.compile(template, {
      header: this.props.header,
      content: this.props.content,
      button: this.props.button,
      attr: this.props.attr,
    });
  }
}
