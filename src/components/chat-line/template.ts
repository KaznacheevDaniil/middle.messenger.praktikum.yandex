const template = `<ul class="chats">{{#each chatlinePersons}}
  <li class="chatline">
    <div class="avatar" style="background-image: url({{photoPerson}})"></div>
    <div class="info">
      <div><span class="name">{{name}}</span>
        <span class="time">{{timeLastMessage}}</span></div>
      <div><span class="message">{{lastMessage}}</span>
        <span class="count">{{countUnread}}</span></div>
    </div>
  </li>
{{/each}}
</ul>`;
export default template;
