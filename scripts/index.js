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

//создание карточки//
const createCard = (data) => {
  const cardElement = templateImage.querySelector('.image').cloneNode(true);
  const newImage = cardElement.querySelector('.image__photo');
  const newName = cardElement.querySelector('.image__title');
  newImage.src = data.link;
  newName.textContent = data.name;
  newImage.alt = data.name;
  const like = cardElement.querySelector('.image__btn-like');
  const deleteBtnCard = cardElement.querySelector('.image__delete');
  like.addEventListener('click', aktivLike);
  deleteBtnCard.addEventListener('click', deleteCard);
  newImage.addEventListener('click', () => {
    setPopupPhoto(data);
    openPopups(popupPhoto);
  });
  return cardElement
}

//вставка карточки в images//
const renderCard = (images, data) => {
  images.prepend(createCard(data));
}

//инициализация карточек из массиве//
initialCards.forEach(data => {
  renderCard(images, data);
})

//функция активации лайка//
function aktivLike(evt) {
  evt.target.classList.toggle('image__btn-like_activ');
}
//функция удаления карточки с картинкой//
function deleteCard(evt) {
  evt.target.closest('.image').remove();
}

//добавление в попап-карточки значения//
formCardElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  data = {
    name: formInputName.value,
    link: formInputLink.value
  }
  renderCard(images, data);
  closePopups(popupAddCard);
  evt.target.reset()
})

//наполнение попа сфото информацией//
function setPopupPhoto(data) {
  photo.src = data.link;
  namePhoto.textContent = data.name;
  photo.alt = data.name;
}

//открытие попапов//
function openPopups(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupsOverlay);
  document.addEventListener('keydown', closePopupsEscape);
}

//Закрытие попапов//
function closePopups(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupsEscape);
  popup.removeEventListener('click', closePopupsOverlay);
}

//Закрытие попапов ESC //
function closePopupsEscape(evt) {
  if (evt.key === 'Escape') {
    const popups = document.querySelectorAll('.popup');
    popups.forEach((i) => {
      i.classList.remove('popup_opened')
    })
    }
  }
//     const openedPopup = document.querySelector('.popup_opened');
//     if (openedPopup) {
//       openedPopup.classList.remove('popup_opened');
//     }
//   }
// }

//Закрытие попапов по клику вне//
function closePopupsOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      openedPopup.classList.remove('popup_opened');

    }
  }
}


//заполняем форму содержиым профиля//
function setFieldData() {
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileAuthorSubtitle.textContent;
}

//Меняем содержиым профиля//
function submitFormProfile(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileAuthorSubtitle.textContent = jobInput.value;
  closePopups(popupProfil);
}

buttenOpen.addEventListener('click', () => { openPopups(popupProfil); setFieldData(); });
buttenCloseProfil.addEventListener('click', () => { closePopups(popupProfil) });
buttenCloseAddCard.addEventListener('click', () => { closePopups(popupAddCard) });
// document.addEventListener('keydown', closePopupsEscape);

// document.addEventListener('keydown', (evt) => { if (evt.key === 'Escape') {closePopups(popupAddCard); closePopups(popupProfil); closePopups(popupPhoto)}})
buttenClosePhoto.addEventListener('click', () => { closePopups(popupPhoto) });
buttenAddCard.addEventListener('click', () => { openPopups(popupAddCard) });
formProfilElement.addEventListener('submit', submitFormProfile);





