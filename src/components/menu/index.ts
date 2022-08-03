import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class Menu extends Block {
  render() {
    return this.compile(template, {
      className: this.props.className,
      listsMenu: this.props.listsMenu,
    });
  }
}
