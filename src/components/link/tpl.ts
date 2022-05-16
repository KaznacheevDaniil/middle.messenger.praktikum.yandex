const tpl = `{{#each links}}
  <a class="{{this.className}}" href=" {{this.hrefLink}} ">{{this.content}}</a>
{{/each}}`;
export default tpl;
