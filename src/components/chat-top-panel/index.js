import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('chatTopPanel', tpl);

export default (photoPerson, namePerson, button) => {
    return tpl({photoPerson, namePerson, button});
}