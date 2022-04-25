import tmpl from './tpl.hbs';
import './style.less';
import linkComp from "../../components/link";
import profileComp from "../../components/profile";
import profileFieldsComp from "../../components/profile-field";
import linkWithImageComp from "../../components/link-with-image";
import modalComp from "../../components/modal";
import buttonComp from "../../components/button";
import inputComp from "../../components/input";
import formComp from '../../components/form';


let profileInfo = {avatar: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg', email: 'text@mail.ru', login: 'DKaznach', first_name: 'Daniil', second_name: 'Kaznacheev', display_name: 'Dan', phone: '8 (800) 555 35 35'}

let profileInfoPrepared = { avatar: { placeholder:'', type: 'text', name: 'Avatar', disabled:'disabled', required: undefined},
                    email: { placeholder:'', type: 'email', name: 'Email', disabled:'disabled', required: undefined},
                    login: { placeholder:'', type: 'text', name: 'Login', disabled:'disabled', required: undefined},
                    first_name: { placeholder:'', type: 'text', name: 'Name', disabled:'disabled', required: undefined},
                    second_name: { placeholder:'', type: 'text', name: 'Surname', disabled:'disabled', required: undefined},
                    display_name: { placeholder:'', type: 'text', name: 'Nickname', disabled:'disabled', required: undefined},
                    phone: { placeholder:'', type: 'tel', name: 'Phone', disabled:'disabled', required: undefined} }

const links = [{klass: 'link__simple blue', hrefLink: '/profile/edit', content: 'Change info'},
    {klass: 'link__simple blue', hrefLink: '/profile/change-pwd', content: 'Change password'},
    {klass: 'link__simple red', hrefLink: '/', content: 'Logout'}];

const inputAvatar = [{klass:'field', type: 'file', placeholder: 'file', name: 'avatar', required: 'required'}];

let prepareInfoProfile = () =>{
    for (let key in profileInfo){
        profileInfoPrepared[key].placeholder = profileInfo[key]
    }
}
// copy values from profileInfo into profileInfoPrepared
prepareInfoProfile()

let fieldsWithoutAvatar = (source) => {

    let profileInfoWithOutAvatar = {};
    for (let key in source) {
        if (key === 'avatar') continue
        profileInfoWithOutAvatar[key] = source[key]
    }
    return profileInfoWithOutAvatar
}




export default tmpl({
    profile: profileComp(profileInfoPrepared.avatar.placeholder, profileInfoPrepared.display_name.placeholder, profileFieldsComp(fieldsWithoutAvatar(profileInfoPrepared))),
    link: linkComp(links),
    backUrl: linkWithImageComp('link-back_blue', '/chats', 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMzUyIDExNS40IDMzMS4zIDk2IDE2MCAyNTZsMTcxLjMgMTYwIDIwLjctMTkuM0wyMDEuNSAyNTZ6IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4='),
    modal: modalComp('changeProfileModal',
        'Input file',
        formComp('/change-avatar',undefined, inputComp(inputAvatar), buttonComp('saveImg', 'save', 'submit')), undefined)
});