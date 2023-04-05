import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.form');
    this._inputsElement = this._popup.querySelectorAll('.form__input');
    this._button = this._popup.querySelector('.form__button');
    this._handleSubmitForm = handleSubmitForm;
  }
  _getInputValues() {
    const formInput = {};
    this._inputsElement.forEach((input) => {
      formInput[input.name] = input.value;
    })
    return formInput
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close()
    })
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
