import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('chatBottomPanel', tpl);

export default (addFileBtn, input, sendMsgBtn) => {
    return tpl({addFileBtn, input, sendMsgBtn});
}