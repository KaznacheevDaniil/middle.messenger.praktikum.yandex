const tpl = `<input
  type="text"
  placeholder="{{placeholder}}"
  name="{{name}}"
  class="{{className}}"
  {{#if valid}}
        data-valid="{{valid}}"
  {{/if}}
>
<span class="error"></span>`;
export default tpl;
