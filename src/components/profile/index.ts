import Block from "../../utils/block";
import "./style.less";
import tpl from "./tpl";
import ProfileFields from "../profile-field";
import profileInfoHelper from "../../utils/profileInfoHelper";

class Profile extends Block {
  render() {
    return this.compile(tpl, {
      avatarUrl: this.props.avatarUrl,
      nickname: this.props.nickname,
      profileFieldsInfo: this.props.profileFieldsInfo,
    });
  }
}

let profileHelper = new profileInfoHelper(true);

let profileFields = profileHelper.getFieldsWithoutAvatar();

const profileComp = new Profile("div", {
  avatarUrl: profileHelper.getValue("avatar"),
  nickname: profileHelper.getValue("display_name"),
  profileFieldsInfo: new ProfileFields("div", { profileFields }),
  events: {
    click: (event) => {
      if (event.target.id == "changeAvatar") {
        document.getElementById("changeProfileModal").style.display = "flex";
      }
    },
  },
});

export { profileComp };
