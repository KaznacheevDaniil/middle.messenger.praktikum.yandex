import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('buttonWithImage', tpl);

export default (value, type, klass) => {
    return tpl({value, type, klass});
}