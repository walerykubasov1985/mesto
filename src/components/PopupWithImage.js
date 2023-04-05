import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photo = this._popup.querySelector('.popup__image');
    this._photoName = this._popup.querySelector('.popup__name-image');
  }
  open(data) {
    super.open();
    this._photo.src = data.link;
    this._photoName.textContent = data.name;
    this._photo.alt = data.name;

  }
}
