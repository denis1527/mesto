// Получаем элемент иконки редактирования профиля
const profileEditingIcon = document.querySelector('.profile__editor');
// Получаем элемент иконки добавления места
const iconAddCard = document.querySelector('.profile__add-mesto');
// Получаем popup редактирования профиля
const popupProfile = document.querySelector('#profile-popup');
// Получаем форму редактирования профиля
const formProfile = popupProfile.querySelector('.popup__form');
// Получаем popup добавления карточки
const popupCards = document.querySelector('#cards-popup');
// Получаем форму popup добавления карточки
const formCards = popupCards.querySelector('.popup__form');
// Получаем input имени
const nameInput = popupProfile.querySelector('#username-input');
// Получаем input описания
const descriptionInput = popupProfile.querySelector('#description-input');

export {
  profileEditingIcon, iconAddCard,
  popupProfile, popupCards,
  formProfile, nameInput,
  descriptionInput, formCards
};