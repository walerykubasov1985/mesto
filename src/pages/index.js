import './index.css'
import {
  popupProfil, popupAddCard, buttenFormProfil, buttenFormAddCard, nameInput, jobInput, formInputName, formInputLink,
  profileAuthor, profileAuthorSubtitle, validationInput
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

//валидация форм профиля и карточки
const validProfil = new FormValidator(validationInput, popupProfil);
const validAddCard = new FormValidator(validationInput, popupAddCard);
validProfil.enableValidation();
validAddCard.enableValidation();

//класс открытия попапа с изображением
const popupWithImage = new PopupWithImage('.popup_open-photo');
popupWithImage.setEventListeners();

//создание карточки с фото и лайком
const createNewCard = (data) => {
  const card = new Card(data, '#images-template', () => { popupWithImage.open(data) });
  return card.generateCard();
}

//добавление карточки в images
const cardsList = new Section({
  renderer: (data) => { cardsList.setItem(createNewCard(data)) }
}, '.images');

//добавление всех карточек
cardsList.renderItems(initialCards);

//Класс с пользователем
const userInfo = new UserInfo({
  userName: '.profile__author',
  userJob: '.profile__author-subtitle',
})

//форма изменения данных профиля
const popupWithProfil = new PopupWithForm({ popupSelector: '.popup_profil', handleSubmitForm: (data) => { userInfo.setUserInfo(data) } });

//форма добавления карточки
const popupWithAddCard = new PopupWithForm({
  popupSelector: '.popup_add-Card', handleSubmitForm: () => {
    cardsList.setItem(createNewCard({
      name: formInputName.value,
      link: formInputLink.value
    }))
  }
});

//функция начального наполнения формы данных профиля
function setFieldDataProfil() {
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileAuthorSubtitle.textContent;
}

//функция настроек попап с данными профиля
const handleClickOpenPopupProfile = () => {
  popupWithProfil.open()
  setFieldDataProfil()
  validProfil.resetInputAndButton();
}
//функция настроек попапа с карточками
const handleClickOpenPopupAddCard = () => {
  popupWithAddCard.open();
  validAddCard.resetInputAndButton();
}

buttenFormProfil.addEventListener('click', () => { handleClickOpenPopupProfile() });
buttenFormAddCard.addEventListener('click', () => { handleClickOpenPopupAddCard() });
// formProfilElement.addEventListener('submit', submitFormProfile);
popupWithProfil.setEventListeners();
popupWithAddCard.setEventListeners();




