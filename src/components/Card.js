export class Card {
  constructor({
    data,
    userId,
    templateElement,
    handleCardClick,
    handleDeleteIconClick,
    handleAddLike,
    handleDeleteLike,
  }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._userId = userId;
    this._cardOwnerId = data.owner._id;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateElement)
      .content.querySelector(".image")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector(".image__btn-like");
    this._imageBtnDelete = this._element.querySelector(".image__delete");
    this._imagePhoto = this._element.querySelector(".image__photo");
    this._imageLikes = this._element.querySelector(".image__likes-number");

    this._imagePhoto.src = this._link;
    this._imagePhoto.alt = this._name;
    this._imageLikes.textContent = this._likes.length;
    this._element.querySelector(".image__title").textContent = this._name;
    this._setEventListeners();
    this._checkLikes();
    this._checkDeleteBtn();
    return this._element;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      if (this._likeBtn.classList.contains("image__btn-like_activ")) {
        this._handleDeleteLike(this._cardId);
      } else {
        this._handleAddLike(this._cardId);
      }
    });

    this._imageBtnDelete.addEventListener("click", () => {
      this._handleDeleteIconClick(this._cardId);
    });
    this._imagePhoto.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }

  // Проверка, стоит ли лайк на карточке
  _checkLikes() {
    if (
      this._likes.some((user) => {
        return this._userId === user._id;
      })
    ) {
      this._likeBtn.classList.add("image__btn-like_activ");
    }
  }

  updateLikes(likes) {
    this._imageLikes.textContent = likes.length;
    this._likeBtn.classList.toggle("image__btn-like_activ");
  }

  //функция удаления карточки с картинкой//
  deleteCard = () => {
    this._element.remove();
    this._element = null;
  };
  // Распознование карточек
  _checkDeleteBtn() {
    if (this._userId !== this._cardOwnerId) {
      this._imageBtnDelete.remove();
    }
  }
}
