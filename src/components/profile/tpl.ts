const tpl = `<div class="profile-info">
  <div class="photo" style="background-image: url( {{avatarUrl}} )"><button
      id="changeAvatar"
      type="button"
    >Change avatar</button></div>
  <div class="nickname"><span>{{nickname}}</span></div>
  {{{profileFieldsInfo}}}
</div>`;
export default tpl;
