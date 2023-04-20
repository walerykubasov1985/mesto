import './index.css'
import Api from '../components/Api.js'
import {
  popupProfil, popupAddCard, buttenFormProfil, buttenFormAddCard, validationInput, buttenAvatar, popupAvatar
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';


//Класс с пользователем
const userInfo = new UserInfo({
  userName: '.profile__author',
  userJob: '.profile__author-subtitle',
  avatar: '.profile__avatar'
})

//новый класс с данными апи
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '7af1ff38-4d30-4ca6-a372-be70556d0f13',
    'Content-Type': 'application/json'
  }
})
let userId;
const initialData = [api.getUserInfo(), api.getInitialCards()]
//* Запрос отрисовки страницы
Promise.all(initialData).then(([userData, initialCards]) => {
  userId = userData._id;
  userInfo.setUserInfo(userData);
  userInfo.setUserInfo(userData);
  cardsList.renderItems(initialCards);
})
  .catch((err) => console.log(`Ошибка: ${err}`));

// api.getUserInfo().then((userData) => { userId = userData._id; userInfo.setUserInfo(userData) }).catch((error) => console.log(`Ошибка: ${error}`))
// api.getInitialCards().then((userData) => { userId = userData._id; cardsList.renderItems(userData) }).catch((error) => console.log(`Ошибка: ${error}`))

//валидация форм профиля и карточки
const validProfile = new FormValidator(validationInput, popupProfil);
const validAddCard = new FormValidator(validationInput, popupAddCard);
const validAvatar = new FormValidator(validationInput, popupAvatar);
validAvatar.enableValidation();
validProfile.enableValidation();
validAddCard.enableValidation();

//создание карточки с фото и лайком
const createNewCard = (data) => {
  const card = new Card({
    data: data,
    userId: userId,
    templateElement: '#images-template',
    handleCardClick: (link, name) => { popupWithImage.open(link, name);},
    handleDeleteIconClick: (cardId) => {
      popupDeleteCard.open();
      popupDeleteCard.submitDelete(() => {
        api.deleteCard(cardId).then(() => {
          popupDeleteCard.close();
          card.deleteCard();
        }).catch((error) => alert(`Ошибка: ${error}`))
      })
    },
    handleAddLike: (cardId) => {
      api.addLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        }).catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleDeleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        }).catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }
  );
  return card.generateCard();
}

//добавление карточки в images
const cardsList = new Section({
  renderer: (data) => { cardsList.addItem(createNewCard(data)) }
}, '.images');

//добавление всех карточек
//cardsList.renderItems(initialCards);

//форма изменения данных профиля
const popupWithProfil = new PopupWithForm({
  popupSelector: '.popup_profil',
  handleSubmitForm: (data) => {
    popupWithProfil.renderLoading(true)
    api.editUserInfo(data).then((res) => { userInfo.setUserInfo(res) })
      .catch((err) => { console.log(`Ошибка: ${err}`) })
      .finally(() => { popupWithProfil.renderLoading(false) })
  }
});

//форма изменения автара
const popupWithAvatar = new PopupWithForm({
  popupSelector: '.popup_update-avatar',
  handleSubmitForm: (data) => {
    popupWithAvatar.renderLoading(true);
    api.editAvatar(data).then((res) => { userInfo.setUserInfo(res) })
      .catch((err) => { console.log(`Ошибка: ${err}`) })
      .finally(() => { popupWithAvatar.renderLoading(false) })
  }
})

//форма добавления карточки
const popupWithAddCard = new PopupWithForm({
  popupSelector: '.popup_add-Card',
  handleSubmitForm: (data) => {
    popupWithAddCard.renderLoading(true)
    api.addInitialCard(data).then((res) => { cardsList.addItem(createNewCard(res)) })
      .catch((err) => { console.log(`Ошибка: ${err}`) })
      .finally(() => { popupWithAddCard.renderLoading(false) })
  }
});

//попап удаление карточки
const popupDeleteCard = new PopupWithSubmit({ popupSelector: '.popup_delete-card' })
popupDeleteCard.setEventListeners();

//класс открытия попапа с изображением
const popupWithImage = new PopupWithImage('.popup_open-photo');
popupWithImage.setEventListeners();

//функция настроек попап с данными профиля
const handleClickOpenPopupProfile = () => {
  popupWithProfil.open()
  popupWithProfil.pasteInputValues(userInfo.getUserInfo());
  validProfile.resetInputsAndButtons();
}
//функция настроек попапа с карточками
const handleClickOpenPopupAddCard = () => {
  popupWithAddCard.open();
  validAddCard.resetInputsAndButtons();
}
//функция настроек попапа с аватаром
const handleClickOpenPopupAvatar = () => {
  popupWithAvatar.open();
  popupWithAvatar.pasteInputValues(userInfo.getUserInfo())
  validAvatar.resetInputsAndButtons();
}

buttenFormProfil.addEventListener('click', () => { handleClickOpenPopupProfile() });
buttenFormAddCard.addEventListener('click', () => { handleClickOpenPopupAddCard() });
buttenAvatar.addEventListener('click', () => { handleClickOpenPopupAvatar() })
popupWithProfil.setEventListeners();
popupWithAddCard.setEventListeners();
popupWithAvatar.setEventListeners();
