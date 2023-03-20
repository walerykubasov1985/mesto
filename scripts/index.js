validProfil = new FormValidator(validationInput, popupProfil);
validAddCard = new FormValidator(validationInput, popupAddCard);
validProfil.enableValidation();
validAddCard.enableValidation();

initialCards.forEach((item) => {
  const card = new Card(item);
  const cardElement = card.generateCard();
  images.append(cardElement);
});

//вставка карточки в images//
const renderCard = (data) => {
  const card = new Card(data);
  const cardElement = card.generateCard();
  images.prepend(cardElement);
}

//добавление в попап-карточки значения//
formCardElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  item = {
    name: formInputName.value,
    link: formInputLink.value
  }
  renderCard(item);
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





