const popupProfil = document.querySelector('.popup_profil');
const popupAddCard = document.querySelector('.popup_add-Card');

const buttenOpen = document.querySelector('.profile__author-btn');
const buttenAddCard = document.querySelector('.profile__add-button')

const formProfilElement = document.querySelector('.form_profil');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const formCardElement = document.querySelector('.form_card');
const formInputName = document.querySelector('.form__input_type_card-name');
const formInputLink = document.querySelector('.form__input_type_card-photo');

const profileAuthor = document.querySelector('.profile__author');
const profileAuthorSubtitle = document.querySelector('.profile__author-subtitle');

const images = document.querySelector('.images');

const popups = document.querySelectorAll('.popup');

export {
  popupProfil, popupAddCard, buttenOpen, buttenAddCard, formProfilElement, nameInput, jobInput,
  formCardElement, formInputName, formInputLink, profileAuthor, profileAuthorSubtitle, images, popups
}
