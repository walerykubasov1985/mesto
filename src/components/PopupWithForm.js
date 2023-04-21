import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(".form");
    this._inputElements = this._formElement.querySelectorAll(".form__input");
    this._button = this._popup.querySelector(".form__button");
    this._handleSubmitForm = handleSubmitForm;
  }
  _getInputValues() {
    const formInput = {};
    this._inputElements.forEach((input) => {
      formInput[input.name] = input.value;
    });
    return formInput;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  setInputValues(data) {
    this._inputElements.forEach((input) => {
      input.value = data[input.name];
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = "Сохранение...";
    } else {
      this._button.textContent = "Сохранение";
    }
  }
}
