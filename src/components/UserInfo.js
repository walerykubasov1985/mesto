export default class UserInfo {
  constructor({ userName, userJob, avatar }) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
      avatar: this._avatar.src,
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
