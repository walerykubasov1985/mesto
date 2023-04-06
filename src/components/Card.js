export class Card {
  constructor(data, templateElement, handleCardClick) {
  this._name = data.name;
  this._link = data.link;
  this._templateElement = templateElement;
  this._handleCardClick = handleCardClick;
}

_getTemplate() {
  const cardElement = document.querySelector(this._templateElement).content.querySelector('.image').cloneNode(true);
  return cardElement;
}

generateCard() {
  this._element = this._getTemplate();
  this._likeBtn = this._element.querySelector('.image__btn-like');
  this._imageBtnDelete = this._element.querySelector('.image__delete');
  this._imagePhoto =  this._element.querySelector('.image__photo');

  this._imagePhoto.src = this._link;
  this._imagePhoto.alt = this._name;
  this._element.querySelector('.image__title').textContent = this._name;
  this._setEventListeners();
  return this._element;
}

_setEventListeners() {
  this._likeBtn.addEventListener('click', () => { this._aktivLike() });
  this._imageBtnDelete.addEventListener('click', () => { this._deleteCard() });
  this._imagePhoto.addEventListener('click', () => { this._handleCardClick( this._link,  this._name) });
}

//функция активации лайка//
_aktivLike = () => {
  this._likeBtn.classList.toggle('image__btn-like_activ');
}
//функция удаления карточки с картинкой//
_deleteCard = () => {
  this._element.remove();
}

}


