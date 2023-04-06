export default class UserInfo {
  constructor({ selectorName, selectorJob }) {
    this._userName = document.querySelector(selectorName);
    this._userJob = document.querySelector(selectorJob);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent
    }
  }

  setUserInfo(data) {
    this._userName.textContent = data.userName;
    this._userJob.textContent = data.userJob;
  }
}
