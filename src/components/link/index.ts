import Block from '../../utils/block';
import './style.less';
import template from './template';

export default class Link extends Block {
  render() {
    return this.compile(template, {
      links: this.props.links,
    });
  }
}
