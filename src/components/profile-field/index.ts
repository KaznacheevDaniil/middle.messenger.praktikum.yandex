import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class ProfileFields extends Block {
  render() {
    return this.compile(template, {
      profileFields: this.props.profileFields,
    });
  }
}
