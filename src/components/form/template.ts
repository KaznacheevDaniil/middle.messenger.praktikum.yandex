const template = `<form action="{{action}}" novalidate>
  {{#if name}}
    <h1>{{name}}</h1>
  {{/if}}
  {{{inputs}}}
  {{{button}}}
</form>`;
export default template;
