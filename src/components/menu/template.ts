const template = `
  <ul class="{{className}}">
    {{#each listsMenu}}
      <li id="{{this.id}}">{{this.content}}</li>
    {{/each}}
  </ul>`;
export default template;
