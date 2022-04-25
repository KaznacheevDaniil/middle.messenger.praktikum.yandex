import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('input', tpl);

export default (inputs) => {
    return tpl({inputs});
}