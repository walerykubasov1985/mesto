import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photo = this._popup.querySelector(".popup__image");
    this._photoName = this._popup.querySelector(".popup__name-image");
  }
  open(link, name) {
    super.open();
    this._photo.src = link;
    this._photoName.textContent = name;
    this._photo.alt = name;
  }
}
