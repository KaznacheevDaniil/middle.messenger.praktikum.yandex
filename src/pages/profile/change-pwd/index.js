import tmpl from './tpl.hbs';
import './style.less';
import profileFieldsComp from "../../../components/profile-field";
import linkWithImageComp from "../../../components/link-with-image";
import buttonComp from "../../../components/button";
import formComp from '../../../components/form';


let profileInfo = {avatar: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg', email: 'text@mail.ru', login: 'DKaznach', first_name: 'Daniil', second_name: 'Kaznacheev', display_name: 'Dan', phone: '8 (800) 555 35 35', password: 'sadwqe214sczxASDwq3;[[[]'}

let profileInfoPrepared = { oldPassword: { placeholder:'asdasdasd', type: 'text', name: 'Current password', disabled: undefined, required: 'required'},
                            newPassword: { placeholder:'asdasdasdsad', type: 'text', name: 'New password', disabled: undefined, required: 'required'},
                            confirmPassword: { placeholder:'dasdasdadasd', type: 'password', name: 'Confirm password', disabled: undefined, required: 'required'}}


export default tmpl({
    form: formComp( '/change-pwd', 'Edit profile', profileFieldsComp(profileInfoPrepared), buttonComp('save', 'save', 'submit')),
    backUrl: linkWithImageComp('link-back_blue', '/profile', 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMzUyIDExNS40IDMzMS4zIDk2IDE2MCAyNTZsMTcxLjMgMTYwIDIwLjctMTkuM0wyMDEuNSAyNTZ6IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=')
});