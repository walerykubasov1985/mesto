import './index.css'
import Api from "../components/Api.js";
import {
  popupProfile,
  popupAddCard,
  buttonFormProfil,
  buttonFormAddCard,
  validationInput,
  buttonAvatar,
  popupAvatar,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";

//Класс с пользователем
const userInfo = new UserInfo({
  userName: ".profile__author",
  userJob: ".profile__author-subtitle",
  avatar: ".profile__avatar",
});

//новый класс с данными апи
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "7af1ff38-4d30-4ca6-a372-be70556d0f13",
    "Content-Type": "application/json",
  },
});
let userId;
const initialData = [api.getUserInfo(), api.getInitialCards()];
//* Запрос отрисовки страницы
Promise.all(initialData)
  .then(([userData, initialCards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardsSection.renderItems(initialCards.reverse());
  })
  .catch((err) => console.log(`Ошибка: ${err}`));

//валидация форм профиля и карточки
const profileFormValidator = new FormValidator(validationInput, popupProfile);
const сardFormValidator = new FormValidator(validationInput, popupAddCard);
const avatarFormValidator = new FormValidator(validationInput, popupAvatar);
avatarFormValidator.enableValidation();
profileFormValidator.enableValidation();
сardFormValidator.enableValidation();

//создание карточки с фото и лайком
const createNewCard = (data) => {
  const card = new Card({
    data: data,
    userId: userId,
    templateElement: "#images-template",
    handleCardClick: (link, name) => {
      popupWithImage.open(link, name);
    },
    handleDeleteIconClick: (cardId) => {
      popupDeleteCard.open();
      popupDeleteCard.setSubmitCallback(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            popupDeleteCard.close();
            card.deleteCard();
          })
          .catch((error) => alert(`Ошибка: ${error}`));
      });
    },
    handleAddLike: (cardId) => {
      api
        .addLike(cardId)
        .then((data) => {
          card.updateLikes(data);
          card.updateLikesImage();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleDeleteLike: (cardId) => {
      api
        .deleteLike(cardId)
        .then((data) => {
          card.updateLikes(data);
          card.updateLikesImage();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
  });
  return card.generateCard();
};

//добавление карточки в images
const cardsSection = new Section(
  {
    renderer: (data) => {
      cardsSection.addItem(createNewCard(data));
    },
  },
  ".images"
);

//форма изменения данных профиля
const popupWithProfil = new PopupWithForm({
  popupSelector: ".popup_profil",
  handleSubmitForm: (data) => {
    popupWithProfil.renderLoading(true);
    api
      .editUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWithProfil.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupWithProfil.renderLoading(false);
      });
  },
});

//форма изменения автара
const popupWithAvatar = new PopupWithForm({
  popupSelector: ".popup_update-avatar",
  handleSubmitForm: (data) => {
    popupWithAvatar.renderLoading(true);
    api
      .editAvatar(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWithAvatar.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupWithAvatar.renderLoading(false);
      });
  },
});

//форма добавления карточки
const popupWithAddCard = new PopupWithForm({
  popupSelector: ".popup_add-Card",
  handleSubmitForm: (data) => {
    popupWithAddCard.renderLoading(true);
    api
      .addCard(data)
      .then((res) => {
        cardsSection.addItem(createNewCard(res));
        popupWithAddCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupWithAddCard.renderLoading(false);
      });
  },
});

//попап удаление карточки
const popupDeleteCard = new PopupWithSubmit({
  popupSelector: ".popup_delete-card",
});
popupDeleteCard.setEventListeners();

//класс открытия попапа с изображением
const popupWithImage = new PopupWithImage(".popup_open-photo");
popupWithImage.setEventListeners();

//функция настроек попап с данными профиля
const handleClickOpenPopupProfile = () => {
  popupWithProfil.open();
  popupWithProfil.setInputValues(userInfo.getUserInfo());
  profileFormValidator.resetInputsAndButtons();
};
//функция настроек попапа с карточками
const handleClickOpenPopupAddCard = () => {
  popupWithAddCard.open();
  сardFormValidator.resetInputsAndButtons();
};
//функция настроек попапа с аватаром
const handleClickOpenPopupAvatar = () => {
  popupWithAvatar.open();
  popupWithAvatar.setInputValues(userInfo.getUserInfo());
  avatarFormValidator.resetInputsAndButtons();
};

buttonFormProfil.addEventListener("click", () => {
  handleClickOpenPopupProfile();
});
buttonFormAddCard.addEventListener("click", () => {
  handleClickOpenPopupAddCard();
});
buttonAvatar.addEventListener("click", () => {
  handleClickOpenPopupAvatar();
});
popupWithProfil.setEventListeners();
popupWithAddCard.setEventListeners();
popupWithAvatar.setEventListeners();
