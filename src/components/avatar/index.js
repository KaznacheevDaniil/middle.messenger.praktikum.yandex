import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('button', tpl);

export default (photoPerson) => {
    return tpl({photoPerson});
}