const template = `<ul class="chats">{{#each chatlinePersons}}
  <li class="chatline">
    <div class="wrap" data-id="{{id}}">
    </div>
    <div class="avatar" style="background-image: url({{avatar}})"></div>
    <div class="info">
      <div><span class="name">{{title}}</span>
            <span class="time">
                {{#date last_message.time}}
                    {{last_message.time}}
                {{/date}}
            </span>
      </div>
      <div><span class="message">{{last_message.content}}</span>
        <span class="count">{{unread_count}}</span></div>
    </div>
  </li>
{{/each}}
</ul>`;
export default template;
