import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import Block from '../../utils/block';
import template from './template';
import render from '../../utils/renderDOM';

class ModalMock extends Block {
  render() {
    return this.compile(template, {
      header: this.props.header,
      content: this.props.content,
      button: this.props.button,
      attr: this.props.attr,
    });
  }
}

describe('Modal component test', () => {
  beforeEach(() => {
    const { window } = new JSDOM(
      `<html>
         <body>
          <div class="app"></div>
         </body>
       </html>`,
      { url: 'http://localhost' },
    );
    global.window = window;
    global.document = window.document;
  });

  it('check use function', () => {
    const modal = new ModalMock(
      'div',
      {
        header: 'testHeader',
        content: '',
      },
    );
    render('.app', modal);
    expect(document.querySelectorAll('.modal').length).to.eq(1);
  });
});
