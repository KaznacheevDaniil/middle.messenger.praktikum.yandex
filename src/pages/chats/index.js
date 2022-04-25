import tmpl from './tpl.hbs';
import './style.less';
import sidebarComp from "../../components/sidebar";
import buttonWithImageComp from "../../components/button-with-image";
import sendMessageComp from "../../components/input-msg";
import searchComp from "../../components/search";
import chatsComp from "../../components/chat-line";
import avatarComp from "../../components/avatar";
import linkComp from "../../components/link";
import chatTopPanelComp from '../../components/chat-top-panel'
import chatBottomPanelComp from '../../components/chat-bottom-panel'
import messagesComp from '../../components/message'
import conversationComp from '../../components/conversation'


let linkToProfile = [{klass:'link__profile', hrefLink:'/profile', content:'profile'}];
let persons = [{photoPerson: avatarComp('https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg'), namePerson: 'Daniil ', lastMessage: 'Hey, masaddd ddddddddddddddddd ddddddd ddddddddd ddddddddddn!', timeLastMessage: '11:32', countUnread: '203'},
                 {photoPerson: avatarComp('https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg'), namePerson: 'Kino', lastMessage: 'Hey,  masaddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd ddddddd ddddddddd man!', timeLastMessage: '11:32', countUnread: '2'},
                 {photoPerson: avatarComp('https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg'), namePerson: 'Vadim', lastMessage: 'Hey, man!', timeLastMessage: '11:32', countUnread: '21110'},
                 {photoPerson: avatarComp('https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg'), namePerson: 'Vasya Pupkin', lastMessage: 'H masaddd ddddddddddddddddd ddddddd ddddddddd ey, man!', timeLastMessage: '11:32', countUnread: '2110'},
                 {photoPerson: avatarComp('https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg'), namePerson: 'Daniil Kaznacheev', lastMessage: 'Hey, masaddd ddddddddddddddddd ddddddd ddddddddd ddddddddddn!', timeLastMessage: '11:32', countUnread: '203'},
                 {photoPerson: avatarComp('https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg'), namePerson: 'Daniil Kaznacheev', lastMessage: 'Hey,  masaddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd dddddd ddddddddddddddddd ddddddd ddddddddd man!', timeLastMessage: '11:32', countUnread: '2'},
                 {photoPerson: avatarComp('https://cdn.pixabay.com/photo/2012/01/09/09/10/sun-11582_960_720.jpg'), namePerson: 'Daniil Kaznacheev', lastMessage: 'Hey, man!', timeLastMessage: '11:32', countUnread: '21110'}];
let messages = [{author: 'Person', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', time: '12:32', status: 'read'}, {author: 'Person', message: 'sadasdasd', time: '12:32', status: 'read'}, {author: 'Person', message: 'sadasdasd', time: '12:32', status: 'read'}, {author: 'User', message: 'Hi, man!', time: '12:32', status: 'unread'}];


export default tmpl({
    sidebar: sidebarComp(
        linkComp(linkToProfile),
        searchComp('search', 'Search...'),
        chatsComp(persons)
    ),
    conversation: conversationComp(
        chatTopPanelComp(avatarComp('https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg'),
              'Viktor Evgen',
            buttonWithImageComp('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGlkPSJHbHlwaCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMywxNmMwLDEuNjU0LDEuMzQ2LDMsMywzczMtMS4zNDYsMy0zcy0xLjM0Ni0zLTMtM1MxMywxNC4zNDYsMTMsMTZ6IiBpZD0iWE1MSURfMjk0XyIvPjxwYXRoIGQ9Ik0xMywyNmMwLDEuNjU0LDEuMzQ2LDMsMywzczMtMS4zNDYsMy0zcy0xLjM0Ni0zLTMtM1MxMywyNC4zNDYsMTMsMjZ6IiBpZD0iWE1MSURfMjk1XyIvPjxwYXRoIGQ9Ik0xMyw2YzAsMS42NTQsMS4zNDYsMywzLDNzMy0xLjM0NiwzLTNzLTEuMzQ2LTMtMy0zUzEzLDQuMzQ2LDEzLDZ6IiBpZD0iWE1MSURfMjk3XyIvPjwvc3ZnPg==', "button", 'button-option')),
        '25 september 2019',
        messagesComp(messages),
        chatBottomPanelComp(buttonWithImageComp('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wYXBlcmNsaXAiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjQ0IDExLjA1bC05LjE5IDkuMTlhNiA2IDAgMCAxLTguNDktOC40OWw5LjE5LTkuMTlhNCA0IDAgMCAxIDUuNjYgNS42NmwtOS4yIDkuMTlhMiAyIDAgMCAxLTIuODMtMi44M2w4LjQ5LTguNDgiLz48L3N2Zz4=', "button", 'button-option'),
            sendMessageComp('input','message', 'Wtite message...', 'required'),
            buttonWithImageComp('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjQ3IDMxYTIgMiAwIDAgMS0xLjgtMS4wOWwtNC03LjU3YTEgMSAwIDAgMSAxLjc3LS45M2w0IDcuNTdMMjkgMy4wNiAzIDEyLjQ5bDkuOCA1LjI2IDguMzItOC4zMmExIDEgMCAwIDEgMS40MiAxLjQybC04Ljg1IDguODRhMSAxIDAgMCAxLTEuMTcuMThMMi4wOSAxNC4zM2EyIDIgMCAwIDEgLjI1LTMuNzJsMjUuOTEtOS40OGEyIDIgMCAwIDEgMi42MiAyLjYybC05LjQ4IDI1LjkxQTIgMiAwIDAgMSAxOS42MSAzMVoiIGRhdGEtbmFtZT0iTGF5ZXIgNDUiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSJmaWxsLTEwMTgyMCI+PC9wYXRoPjwvc3ZnPg==', "button", 'button-primary rounded-img')
        )

    )
});