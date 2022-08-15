const template = `<ul class="info-fields">
  {{#each profileFields}}
    <li class="input-wrap"><div><label class="name">{{this.nameField}}</label></div>
      <div><input
        class="value"
        name="{{this.name}}"
        placeholder="{{this.placeholder}}"
        value="{{this.value}}"
        {{disabled}}
        data-valid="{{valid}}"
      />
      <span class="error ta-r"></span>
      </div>
    </li>
  {{/each}}
</ul>`;
export default template;
