export const validationInput = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_activ'
};

export class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
  }

  //метод ошибки
  _showInputError = (inputElement, errorMessage) => {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  //метод удаления ошибки
  _hideInputError = (inputElement) => {
    this.errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    this.errorElement.classList.remove(this._errorClass);
    this.errorElement.textContent = '';
  };

  //метод проверки валидности
  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  //метод проверки всех полей ввода на валидность
  _hasInvalidInput = () => {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  //метод включения/отключения кнопки
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', true);
    }
  };

  //метод добавления слушателя полям формы
  _setEventListeners = () => {
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
  };


  //метод добавления обработки форме
  enableValidation() {
    this._setEventListeners();
  }

  //сброс инпутов
  resetInputs() {
    this._inputList.forEach((input) => {
      input.classList.remove(this._inputErrorClass);
      input.nextElementSibling.textContent = '';
    })
  }
}



