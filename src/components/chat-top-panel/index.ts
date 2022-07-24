import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class ChatTopPanel extends Block {
  render() {
    return this.compile(template, {
      photoPerson: this.props.photoPerson,
      namePerson: this.props.namePerson,
      button: this.props.button,
    });
  }
}
