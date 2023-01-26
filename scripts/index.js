let popup = document.querySelector('.popup');
let buttenOpen = document.querySelector('.profile__author-btn');
let buttenClose = document.querySelector('.popup__button-close');

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_name');
let jobInput = document.querySelector('.form__input_job');

let profileAuthor = document.querySelector('.profile__author');
let profileAuthorSubtitle = document.querySelector('.profile__author-subtitle');

//подключение класса с dyspley:block//
function popupOpened() {
  popup.classList.add('popup_opened');
}

//отключение класса с dyspley:block//
function popupClosed() {
  popup.classList.remove('popup_opened');
}

//заполняем форму содержиым профиля//
function textInput() {
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileAuthorSubtitle.textContent;
}

//Меняем содержиым профиля//
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileAuthorSubtitle.textContent = jobInput.value;
  popupClosed();
}

textInput();
buttenOpen.addEventListener('click', popupOpened);
buttenClose.addEventListener('click', popupClosed);
formElement.addEventListener('submit', handleFormSubmit);
