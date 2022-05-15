const tpl = `
  <div class="messages-container">
    <div class="ta-c chat-date"><span>{{date}}</span></div>

{{#each messages }}
    {{#if (isAuthor author 'Person')}}
    <div class="message person">
    {{else}}
     <div class="message user">
    {{/if}}
        <p> {{ message }}</p>
        <div class="info-msg"><span class="time"> {{time}}</span><span class="status"> {{ status }}</span></div>
    </div>
{{/each}}
    </div>`;
export default tpl;
