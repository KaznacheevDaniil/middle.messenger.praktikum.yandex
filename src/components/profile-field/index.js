import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('profileFieldInfo', tpl);

export default (profileFields) => {
    return tpl({profileFields});
}