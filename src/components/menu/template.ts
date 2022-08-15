const template = `
  <ul{{#if className}}
        class="{{className}}"
      {{/if}}>
    {{#each listsMenu}}
      <li id="{{this.id}}">{{this.content}}</li>
    {{/each}}
  </ul>`;
export default template;
