import chai from 'chai'
import Router from './router'
import PageLogin from '../pages/login';

let router = new Router('.app');

describe('Router test', function(){

  it('check use function.', function(){
    router.use('/login', PageLogin);
    console.log()
    chai.expect(router.routes).to.eq(1);
  });

  it('check go function', function(){
    router.go('');

  });

  it('check getRoute function', function(){



  });

});