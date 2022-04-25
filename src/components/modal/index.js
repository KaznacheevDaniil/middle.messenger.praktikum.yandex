import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('modal', tpl);

export default (id, header, content, button) => {
    return tpl({id, header, content, button});
}