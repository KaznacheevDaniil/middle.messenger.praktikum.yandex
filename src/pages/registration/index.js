import tmpl from './tpl.hbs';
import './style.less';
import formComp from '../../components/form';
import inputComp from '../../components/input';
import linkComp from "../../components/link";
import buttonComp from "../../components/button";

const inputs = [{klass:'field', label: 'Mail', type: 'email', placeholder:'Your email', name: 'email', required: undefined},
                {klass:'field', label: 'Login', type: 'text', placeholder:'Your login', name: 'login', required: 'required'},
                {klass:'field', label: 'Name', type: 'text', placeholder:'Your name', name: 'first_name', required: 'required'},
                {klass:'field', label: 'Surname', type: 'text', placeholder:'Your surname', name: 'second_name', required: undefined},
                {klass:'field', label: 'Phone', type: 'tel', placeholder:'Your phone', name: 'phone', required: 'required'},
                {klass:'field', label: 'Password', type: 'password', placeholder:'Your password', name: 'password', required: 'required'}]

const links = [{klass: 'link__simple blue', hrefLink: '/', content: 'Sign in'}]

export default tmpl({
    form: formComp('/registration',
             'Registration',
                   inputComp(inputs),
                   buttonComp('reg', 'Create account','submit')),
    link: linkComp(links)
});