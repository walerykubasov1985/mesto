import {popupImagePhoto} from './constants.js';
import {openPopup} from './utils.js'

export class Card {
  constructor(data, templateElement) {
    this._name = data.name;
    this._link = data.link;
    this._templateElement = templateElement;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateElement).content.querySelector('.image').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.image__photo').src = this._link;
    this._element.querySelector('.image__photo').alt = this._name;
    this._element.querySelector('.image__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.image__btn-like').addEventListener('click', () => { this._aktivLike() });
    this._element.querySelector('.image__delete').addEventListener('click', () => { this._deleteCard() });
    this._element.querySelector('.image__photo').addEventListener('click', () => { this._setPopupPhoto() });
  }

  //функция активации лайка//
  _aktivLike = () => {
    this._element.querySelector('.image__btn-like').classList.toggle('image__btn-like_activ');
  }
  //функция удаления карточки с картинкой//
  _deleteCard = () => {
    this._element.remove();
  }

  //наполнение попа сфото информацией//
  _setPopupPhoto = () => {
    openPopup(popupImagePhoto);
    document.querySelector('.popup__image').src = this._link;
    document.querySelector('.popup__name-image').textContent = this._name;
    document.querySelector('.popup__name-image').alt = this._name;
  }

}

