const popupProfil = document.querySelector('.popup_profil');
const popupAddCard = document.querySelector('.popup_add-Card');
const popupImagePhoto = document.querySelector('.popup_open-photo')
const popupAvatar = document.querySelector('.popup_update-avatar')

const buttenFormProfil = document.querySelector('.profile__author-btn');
const buttenFormAddCard = document.querySelector('.profile__add-button')
const buttenAvatar = document.querySelector('.profile__avatar-btn')

const formProfilElement = document.querySelector('.form_profil');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const formCardElement = document.querySelector('.form_card');
const formInputName = document.querySelector('.form__input_type_card-name');
const formInputLink = document.querySelector('.form__input_type_card-photo');

const profileAuthor = document.querySelector('.profile__author');
const profileAuthorSubtitle = document.querySelector('.profile__author-subtitle');

const images = document.querySelector('.images');
const image = document.querySelector('.popup__image');
const imageName = document.querySelector('.popup__name-image');

const popups = document.querySelectorAll('.popup');



const validationInput = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_activ'
};


export {
  popupProfil, popupAddCard, popupImagePhoto, buttenFormProfil, buttenFormAddCard, formProfilElement, nameInput, jobInput,
  formCardElement, formInputName, formInputLink, profileAuthor, profileAuthorSubtitle, images, popups, validationInput, image, imageName, buttenAvatar, popupAvatar
}


