const template = `<div class="profile-info">
  <div class="photo" style="background-image: url( {{avatar}} )"><button
      id="changeAvatar"
      type="button"
    >Change avatar</button></div>
  <div class="nickname"><span>
  </span></div>
  {{{profileFieldsInfo}}}
</div>`;
export default template;
