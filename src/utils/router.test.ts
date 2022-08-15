import chai from 'chai';
import Router from './router';
import PageLogin from '../pages/login';

const router = new Router('.app');

describe('Router test', () => {
  it('check use function.', () => {
    router.use('/login', PageLogin);
    console.log();
    chai.expect(router.routes).to.eq(1);
  });

  it('check go function', () => {
    router.go('');
  });

  it('check getRoute function', () => {

  });
});
