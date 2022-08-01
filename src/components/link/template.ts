const template = `{{#each links}}
  <a class="{{this.className}}" 
      {{#if this.hrefLink}}
      href="{{this.hrefLink}}"
    {{/if}}
  >{{this.content}}</a>
{{/each}}`;
export default template;
