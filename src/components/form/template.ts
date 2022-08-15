const template = `<form novalidate>
  {{#if name}}
    <h1>{{name}}</h1>
  {{/if}}
  {{{inputs}}}
  {{{button}}}
  <div class="log-container"></div>
</form>`;
export default template;
