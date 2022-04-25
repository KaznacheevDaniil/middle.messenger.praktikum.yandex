import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('search', tpl);

export default (klass, placeholder) => {
    return tpl({klass, placeholder});
}