import {
  popupProfil, popupAddCard, buttenOpen, buttenAddCard, formProfilElement, nameInput, jobInput, formCardElement, formInputName, formInputLink,
  profileAuthor, profileAuthorSubtitle, images, popups
} from './constants.js';
import { initialCards } from './cards.js';
import { Card } from './card.js';
import { validationInput, FormValidator } from './validate.js'


const validProfil = new FormValidator(validationInput, popupProfil);
const validAddCard = new FormValidator(validationInput, popupAddCard);
validProfil.enableValidation();
validAddCard.enableValidation();

//создание карточки с фото и лайком
const createNewCard = (data) => {
  const card = new Card(data, '#images-template');
  return card.generateCard();
}

//вставка всех карточек в images
initialCards.forEach((data) => {
  images.append(createNewCard(data));
});

//вставка карточки в images
const renderCard = (data) => {
  images.prepend(createNewCard(data));
}
const formCard = (evt) => {
  evt.preventDefault();
  const formInputName = document.querySelector('.form__input_type_card-name');
  const formInputLink = document.querySelector('.form__input_type_card-photo');
  const item = {
    name: formInputName.value,
    link: formInputLink.value
  }
  renderCard(item);
  closePopup(popupAddCard);
  evt.target.reset()
}

//добавление в попап-карточки значения//
formCardElement.addEventListener('submit', formCard)

//открытие попапа//
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupsEscape);
}

//Закрытие попапа//
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupsEscape);
}

//Закрытие попапов ESC //
function closePopupsEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      openedPopup.classList.remove('popup_opened');
    }
  }
}

//Закрытие попапов по клику крестика и фона//
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
      closePopup(evt.currentTarget);
    }
  });
});

//заполняем форму содержиым профиля//
function setFieldData() {
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileAuthorSubtitle.textContent;
}

function setFieldDataCard() {
  formInputName.value = '';
  formInputLink.value = '';
}

//Меняем содержиым профиля//
function submitFormProfile(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileAuthorSubtitle.textContent = jobInput.value;
  closePopup(popupProfil);
  evt.target.reset();
}

buttenOpen.addEventListener('click', () => { openPopup(popupProfil); setFieldData(); validProfil.resetInputs() });
buttenAddCard.addEventListener('click', () => { openPopup(popupAddCard); setFieldDataCard(); validAddCard.resetInputs(); });
formProfilElement.addEventListener('submit', submitFormProfile);





