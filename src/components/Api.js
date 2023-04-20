export default class Api {
  constructor(setting) {
    this._address = setting.baseUrl;
    this._headers = setting.headers;
  }
  //получение инфо профиля
  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) { return res.json() }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  //редактирование профиля
  editUserInfo(data) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.userName,
        about: data.userJob
      })
    }).then((res) => {
      if (res.ok) { return res.json() }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
   // Редактирование аватара
   editAvatar(data) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    }).then((res) => {
        if (res.ok) { return res.json() }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  // получение карточек с сервера
  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) { return res.json() }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  //добавление карточки
  addInitialCard(data) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.nameCard,
        link: data.linkCard,
      })
    }).then((res) => {
      if (res.ok) { return res.json() }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  // Удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then((res) => {
      if (res.ok) { return res.json() }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  // Ставим лайк карточке
  addLike(cardId) {
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((res) => {
      if (res.ok) { return res.json() }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // Удаляем лайк
  deleteLike(cardId) {
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => {
      if (res.ok) { return res.json() }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }


}
