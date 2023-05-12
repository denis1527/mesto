class Api {
  constructor({ link, headers }) {
    this._link = link;
    this._headers = headers;
  }
  // Метод обработки ответа сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }
  // Метод инициализации карточек с сервера
  getInitialCards() {
    return fetch(`${this._link}cards`, {
      headers: this._headers
      // По умолчанию fetch — это GET, можно не указывать
    })
      .then(res => { return this._checkResponse(res); })
  }
  // Метод добавления новой карточки на сервер
  addNewCard({ name, link }) {
    return fetch(`${this._link}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link })
    })
      .then(res => { return this._checkResponse(res); })
  }
  // Метод удаления карточки с сервера
  deleteCard(cardId) {
    return fetch(`${this._link}cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => { return this._checkResponse(res); })
  }
  // Метод получения данных пользователя с сервера
  getUserData() {
    return fetch(`${this._link}users/me`, {
      headers: this._headers
      // По умолчанию fetch — это GET, можно не указывать
    })
      .then(res => { return this._checkResponse(res); })
  }
  // Метод отправки данных пользователя на сервер
  sendUserData(profileData) {
    return fetch(`${this._link}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ name: profileData.username, about: profileData.description })
    })
      .then(res => { return this._checkResponse(res); })
  }
  // Метод отправки данных о новом аватаре на сервер
  sendAvatarData(avatarLink) {
    return fetch(`${this._link}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: avatarLink.avatar })
    })
      .then(res => { return this._checkResponse(res); })
  }
  // Метод отправки лайка на сервер
  putCardLike(cardId) {
    return fetch(`${this._link}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    })
      .then(res => { return this._checkResponse(res); })
  }
  // Метод удаления лайка с сервера
  deleteCardLike(cardId) {
    return fetch(`${this._link}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => { return this._checkResponse(res); })
  }
}
// Экспорт класса
export { Api };