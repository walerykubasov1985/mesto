import {popups} from './constants.js'

//открытие попапа//
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupsEscape);
}

//Закрытие попапа//
export function closePopup(popup) {
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


