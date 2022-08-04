const template = `<div class="top-panel">
  <div class="info">
    <div class="avatar" style="background-image: url({{photoChat}})"></div>
    <div class="name"> {{nameChat}}</div>
  </div>
  <div class="options flex-c">
  <div class="m-r-30"><span>Your id: {{ id }}</span></div>
      {{{button}}}
      {{{ menu }}}
  </div>
</div>`;
export default template;
