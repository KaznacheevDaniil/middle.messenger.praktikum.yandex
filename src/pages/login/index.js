import tmpl from './tpl.hbs';
import './style.less';
import formComp from '../../components/form';
import inputComp from '../../components/input';
import linkComp from "../../components/link";
import buttonComp from "../../components/button";

const inputs = [{klass:'field', label: 'Login',type: 'text',placeholder:'Your login', name: 'login', required: 'required'},
                {klass:'field', label: 'Password',type: 'password',placeholder:'Your password', name: 'password', required: 'required'}]

const links = [{klass: 'link__simple blue', hrefLink: '/404', content: 'Forgot your password?'},
               {klass: 'link__simple blue', hrefLink: '/reg', content: 'Create profile'}]

export default tmpl({
    form: formComp('/login',
                  'Log in',
                        inputComp(inputs),
                        buttonComp('login', 'Enter','submit')),
    link: linkComp(links)
});