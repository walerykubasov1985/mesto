let popup = document.querySelector('.popup');
let buttenOpen = document.querySelector('.profile__author-btn');
let buttenClose = document.querySelector('.popup__button-close');

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');

let profileAuthor = document.querySelector('.profile__author');
let profileAuthorSubtitle = document.querySelector('.profile__author-subtitle');

//заполняем форму содержиым профиля//
function setFieldData() {
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileAuthorSubtitle.textContent;
}

//подключение класса с dyspley:block//
function openPopup() {
  popup.classList.add('popup_opened');
  setFieldData();
}

//отключение класса с dyspley:block//
function closePopup() {
  popup.classList.remove('popup_opened');
}

//Меняем содержиым профиля//
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileAuthorSubtitle.textContent = jobInput.value;
  closePopup();
}

buttenOpen.addEventListener('click', openPopup);
buttenClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
