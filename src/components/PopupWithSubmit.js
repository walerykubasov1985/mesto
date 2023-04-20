import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.form');

  }

  submitDelete(remove) {
    this._handleSubmit = remove;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    })
  }


}
