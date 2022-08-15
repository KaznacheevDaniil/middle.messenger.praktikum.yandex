const template = `
  <div class="messages-container" id="MessagesContainer">

{{#each userMessages }}
    {{#if (isAuthor userId PersonId)}}
    <div class="message person">
    {{else}}
     <div class="message user">
    {{/if}}
        <p> {{ content }}</p>
        <div class="info-msg"><span class="time"> {{time}}</span><span class="status"> {{ userId }}</span></div>
    </div>
{{/each}}
    </div>`;
export default template;
