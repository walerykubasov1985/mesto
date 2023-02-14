let popupProfil = document.querySelector('.popup_profil');
let popupAddCard = document.querySelector('.popup_add-Card');
let popupPhoto = document.querySelector('.popup_open-photo');

let buttenOpen = document.querySelector('.profile__author-btn');
let сloseBtnProfil = popupProfil.querySelector('.popup__button-close');
let сloseBtnAddCard = popupAddCard.querySelector('.popup__button-close');
let сloseBtnPhoto = popupPhoto.querySelector('.popup__button-close');


let buttenAddCard = document.querySelector('.profile__add-button')

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let formCard = document.querySelector('.form_card');
let formInputName = document.querySelector('.form__input_type_card-name');
let formInputLink = document.querySelector('.form__input_type_card-photo');



let profileAuthor = document.querySelector('.profile__author');
let profileAuthorSubtitle = document.querySelector('.profile__author-subtitle');

const images = document.querySelector('.images');
const templateImage = document.querySelector('#images-temlate').content;

let photo = document.querySelector('.popup__image');
let namePhoto = document.querySelector('.popup__name-image');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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
    PopupPhoto(data);
    openPopupPhoto();
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
formCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  data = {
    name: formInputName.value,
    link: formInputLink.value
  }
  renderCard(images, data);
  closePopup(popupAddCard);
})

//наполнение попа сфото информацией//
function PopupPhoto(data) {
  photo.src = data.link;
  namePhoto.textContent = data.name;
}

//открытие попапа addCard//
function openPopupAddCard() {
  popupAddCard.classList.add('popup_opened');
}

//открытие попапа Photo//
function openPopupPhoto() {
  popupPhoto.classList.add('popup_opened');
}


//заполняем форму содержиым профиля//
function setFieldData() {
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileAuthorSubtitle.textContent;
}

//открытие попапа profil//
function openPopupProfil() {
  popupProfil.classList.add('popup_opened');
  setFieldData();
}

//Закрытие попапов//
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Меняем содержиым профиля//
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileAuthorSubtitle.textContent = jobInput.value;
  closePopup(popupProfil);
}

buttenOpen.addEventListener('click', openPopupProfil);
сloseBtnProfil.addEventListener('click', () => { closePopup(popupProfil) });
сloseBtnAddCard.addEventListener('click', () => { closePopup(popupAddCard) });
сloseBtnPhoto.addEventListener('click', () => { closePopup(popupPhoto) });
buttenAddCard.addEventListener('click', openPopupAddCard);
formElement.addEventListener('submit', handleFormSubmit);
