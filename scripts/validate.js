const form = document.querySelector('.form');
const formInput = form.querySelector('.form__input');
const formError = form.querySelector(`.${formInput.id}-error`)


const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_activ');
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_activ');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage)
  }
  else {
    hideError(formElement, inputElement)
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__button_inactive');
    buttonElement.setAttribute('disabled', true);
  }
  else {
    buttonElement.classList.remove('form__button_inactive');
    buttonElement.removeAttribute('disabled');
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    })
    console.log(toggleButtonState(inputList, buttonElement))
  })
}



const enableValidation = () => {
  formList = Array.from(document.querySelectorAll('.form'))
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault()
    })
    setEventListeners(formElement)
  })
}
enableValidation()

