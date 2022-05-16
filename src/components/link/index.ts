import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';

export default class Link extends Block {
  render() {
    return this.compile(tpl, {
      links: this.props.links,
    });
  }
}
