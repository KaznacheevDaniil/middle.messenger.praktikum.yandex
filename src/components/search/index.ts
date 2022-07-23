import Block from '../../utils/block';
import './style.less';
import tpl from './tpl';

export default class Search extends Block {
  render() {
    return this.compile(tpl, {
      placeholder: this.props.placeholder,
      className: this.props.className,
    });
  }
}
