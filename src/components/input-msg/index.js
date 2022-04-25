import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('inputMsg', tpl);

export default (klass, name, placeholder, required) => {
    return tpl({klass, name, placeholder, required});
}