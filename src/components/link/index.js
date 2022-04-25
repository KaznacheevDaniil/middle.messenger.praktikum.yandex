import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('linkComp', tpl);

export default ( links ) => {
    return tpl({links});
}