import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class Avatar extends Block {
  render() {
    return this.compile(template, {
      photoPerson: this.props.photoPerson,
    });
  }
}
