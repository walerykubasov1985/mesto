import {
  popupProfil, popupAddCard, buttenFormProfil, buttenFormAddCard, formProfilElement, nameInput, jobInput, formCardElement, formInputName, formInputLink,
  profileAuthor, profileAuthorSubtitle, images,
} from './constants.js';
import { initialCards } from './cards.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js'
import { openPopup, closePopup } from './utils.js'
import { validationInput } from './constants.js'


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
const handleFormCard = (evt) => {
  evt.preventDefault();
  const item = {
    name: formInputName.value,
    link: formInputLink.value
  }
  renderCard(item);
  closePopup(popupAddCard);
  evt.target.reset()
}

//добавление в попап-карточки значения//
formCardElement.addEventListener('submit', handleFormCard)



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

const handleButtenForms = (popup) => {
  openPopup(popup);
  setFieldDataCard();
  setFieldData();
  validAddCard.resetInputAndButton();
  validProfil.resetInputAndButton();
}

buttenFormProfil.addEventListener('click', () => { handleButtenForms(popupProfil) });
buttenFormAddCard.addEventListener('click', () => { handleButtenForms(popupAddCard) });
formProfilElement.addEventListener('submit', submitFormProfile);





