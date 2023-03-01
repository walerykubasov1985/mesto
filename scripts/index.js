
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
    openPopup(popupPhoto);
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
  closePopup(popupAddCard);
  evt.target.reset()
})

//наполнение попа сфото информацией//
function setPopupPhoto(data) {
  photo.src = data.link;
  namePhoto.textContent = data.name;
  photo.alt = data.name;
}

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

//Меняем содержиым профиля//
function submitFormProfile(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileAuthorSubtitle.textContent = jobInput.value;
  closePopup(popupProfil);
  evt.target.reset();
}

buttenOpen.addEventListener('click', () => { openPopup(popupProfil); setFieldData(); });
buttenAddCard.addEventListener('click', () => { openPopup(popupAddCard) });
formProfilElement.addEventListener('submit', submitFormProfile);





