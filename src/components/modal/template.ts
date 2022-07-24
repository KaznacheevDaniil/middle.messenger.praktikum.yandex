const template = `
  <div class="modal">
    <h3 class="modal-header">{{header}}</h3>
    <div class="modal-content">{{{content}}}</div>
    <div class="modal-button">
      {{#if button}}
        {{{button}}}
      {{/if}}
    </div>
  </div>`;
export default template;
