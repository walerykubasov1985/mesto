import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(".form");
  }

  setSubmitCallback(handleSubmit) {
    this._handleSubmit = handleSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}
