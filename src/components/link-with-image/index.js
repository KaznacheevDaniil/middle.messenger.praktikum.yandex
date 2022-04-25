import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('linkWithImage', tpl);

export default (klass, link, urlImg) => {
    return tpl({klass, link, urlImg});
}