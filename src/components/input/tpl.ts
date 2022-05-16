const tpl = `{{#each inputs}}
  <div class="{{className}} input-wrap">
    {{#if label}}
      <label>{{label}}</label>
    {{/if}}
    <input
      type="{{type}}"
      placeholder="{{placeholder}}"
      name="{{name}}"
      {{#if valid}}
        data-valid="{{valid}}"
      {{/if}}
      
    />
    <span class="error"></span>
  </div>
{{/each}}`;
export default tpl;
