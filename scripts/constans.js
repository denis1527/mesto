const modalProfileEdit = document.querySelector('.popup_profile-edit') // попап редактирования профиля
const modalProfileEditButtonOpen = document.querySelector('.profile__edit-button')// кнопка открытия попапа редактирования профиля
const modalProfileEditButtonClose = document.querySelector('.popup__close-button') // кнопка закрытия попапа редактирования профиля
const profileNameInput = document.querySelector('.popup__input_data_name') // инпут имени попапа редактирования профиля
const profileAboutInput = document.querySelector('.popup__input_data_about') // инпут описания попапа редактирования профиля
const modalWindowForm = document.querySelector('.popup__form') // форма попапа
const profileName = document.querySelector('.profile__name') // имя профиля
const profileAbout = document.querySelector('.profile__about') // описание профиля
const modalAddForm = document.querySelector('.popup_card-add') // попап добавления карточек
const modalAddFormButtonOpen = document.querySelector('.profile__add-button') // кнопка попапа добавления карточек
const modalAddFormButtonClose = document.querySelector('.popup__close-button_card-add') // кнопка попапа добавления карточек
const modalFigurePopup = document.querySelector('.popup_zoom-image') // Попап с изображением
const modalFigurePopupCloseButton = document.querySelector('.popup__close-button_zoom-image') // Кнопка закрытия попапа с изображением
const submitButtonAddForm = modalAddForm.querySelector('.popup__button') //Кнопка сабмита в попапе добавления карточки
const elementsContainer = document.querySelector('.elements')
const cardAddForm = modalAddForm.querySelector('.popup__form')
const popupCaption = document.querySelector('.popup__caption')
const popupImage = document.querySelector('.popup__image')
const placeName = document.querySelector('.popup__input_place_name')
const placeUrl = document.querySelector('.popup__input_place_url')

const selectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export { modalProfileEdit,
  modalProfileEditButtonOpen,
  modalProfileEditButtonClose,
  profileNameInput,
  profileAboutInput,
  modalWindowForm,
  profileName,
  profileAbout,
  modalAddForm,
  modalAddFormButtonOpen,
  modalAddFormButtonClose,
  modalFigurePopup,
  modalFigurePopupCloseButton,
  submitButtonAddForm,
  elementsContainer,
  cardAddForm,
  popupCaption,
  popupImage,
  placeName,
  placeUrl,
  selectors,
  initialCards }