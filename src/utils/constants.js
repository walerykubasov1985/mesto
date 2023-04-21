const popupProfile = document.querySelector('.popup_profil');
const popupAddCard = document.querySelector('.popup_add-Card');
const popupImagePhoto = document.querySelector('.popup_open-photo')
const popupAvatar = document.querySelector('.popup_update-avatar')
const buttonFormProfil = document.querySelector('.profile__author-btn');
const buttonFormAddCard = document.querySelector('.profile__add-button')
const buttonAvatar = document.querySelector('.profile__avatar-btn')
const validationInput = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_activ'
};
export {
  popupProfile, popupAddCard, popupImagePhoto, buttonFormProfil, buttonFormAddCard, validationInput, buttonAvatar, popupAvatar
}


