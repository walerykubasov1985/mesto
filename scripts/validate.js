const validationInput = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_activ'
};

//функция ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationInput.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationInput.errorClass);
};

//функция удаления ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationInput.inputErrorClass);
  errorElement.classList.remove(validationInput.errorClass);
  errorElement.textContent = '';
};

//функция проверки валидности
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//функция проверки всех полей ввода на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

//функция включения/отключения кнопки
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationInput.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validationInput.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true);
  }
};

//функция добавления слушателя полям формы
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationInput.inputSelector));
  const buttonElement = formElement.querySelector(validationInput.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//функция добавления обработки слушателя всем формам
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationInput.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation()







