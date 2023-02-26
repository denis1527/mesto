let popupProfile = document.querySelector('.popup');
let formElement = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input_data_name');
let aboutInput = document.querySelector('.popup__input_data_about');
let profilName = document.querySelector('.profile__name');
let profilAbout = document.querySelector('.profile__about');
let popupButton = document.querySelector('.popup__button');

function handleOpenPopupForm() {
    popupProfile.classList.add('popup_opened');
    nameInput.value = profilName.textContent;
    aboutInput.value = profilAbout.textContent;
  }
  formElement.addEventListener('click', handleOpenPopupForm)
  function handleRemovePopupForm(){
    popupProfile.classList.remove('popup_opened');
  }
popupCloseButton.addEventListener('click', handleRemovePopupForm);
function handleFormSubmit (event) {
    event.preventDefault()
    popupProfile.classList.remove('popup_opened');
    profilName.textContent = nameInput.value;
    profilAbout.textContent = aboutInput.value;
};
popupButton.addEventListener('click', handleFormSubmit);
formElement.addEventListener('submit', handleFormSubmit); 