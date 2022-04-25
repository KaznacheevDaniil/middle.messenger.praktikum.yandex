import tmpl from './tpl.hbs';
import './style.less';
import statusCodeComp from "../../components/status-code";
import linkComp from "../../components/link";

const links = [{klass: 'link__simple blue', hrefLink: '/chats', content: 'Back to chats'}];

export default tmpl({
    statusCode: statusCodeComp('500'),
    contentInfoPage: 'You went in the wrong place, marked',
    wrapper_class: 'page-status_wrapper flex-c',
    link: linkComp(links)
});


