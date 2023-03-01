const popupProfil = document.querySelector('.popup_profil');
const popupAddCard = document.querySelector('.popup_add-Card');
const popupPhoto = document.querySelector('.popup_open-photo');

const buttenOpen = document.querySelector('.profile__author-btn');
const buttenAddCard = document.querySelector('.profile__add-button')

const buttenCloseProfil = popupProfil.querySelector('.popup__button-close');
const buttenCloseAddCard = popupAddCard.querySelector('.popup__button-close');
const buttenClosePhoto = popupPhoto.querySelector('.popup__button-close');

const formProfilElement = document.querySelector('.form_profil');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const formCardElement = document.querySelector('.form_card');
const formInputName = document.querySelector('.form__input_type_card-name');
const formInputLink = document.querySelector('.form__input_type_card-photo');

const profileAuthor = document.querySelector('.profile__author');
const profileAuthorSubtitle = document.querySelector('.profile__author-subtitle');

const images = document.querySelector('.images');
const templateImage = document.querySelector('#images-temlate').content;

const photo = document.querySelector('.popup__image');
const namePhoto = document.querySelector('.popup__name-image');

const popups = document.querySelectorAll('.popup');
