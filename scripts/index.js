let popupProfile = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form')
let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input_data_name');
let aboutInput = document.querySelector('.popup__input_data_about');
let profilName = document.querySelector('.profile__name');
let profilAbout = document.querySelector('.profile__about');

function handleOpenPopupForm() {
  popupProfile.classList.add('popup__opened');
  nameInput.value = profilName.textContent;
  aboutInput.value = profilAbout.textContent;
}

function closePopup(){
    popupProfile.classList.remove('popup__opened');
  }
function handleFormSubmit(event) {
  event.preventDefault();
  profilName.textContent = nameInput.value;
  profilAbout.textContent = aboutInput.value;
  closePopup();
}
editButton.addEventListener('click', handleOpenPopupForm);
popupForm.addEventListener('submit', handleFormSubmit);
popupCloseButton.addEventListener('click', closePopup);  