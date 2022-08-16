import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import Block from './block';
import Router from './router';

class TestPage extends Block {
  constructor() {
    super('div');
  }

  render() {
    return this.compile('<h1>Page</h1>', {});
  }
}

describe('Router test', () => {
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
    const expTestPage = new TestPage();
    const router = new Router('.app');
    router.use('/', expTestPage);
    expect(router.routes.length).to.eq(1);
  });

  it('check go function', () => {
    const expTestPage = new TestPage();
    const router = new Router('.app');
    router.use('/some-url', expTestPage);
    router.go('/some-url');
    expect(router.currentRoute.pathname).to.eq('/some-url');
  });
});
