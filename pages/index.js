let formElement = document.querySelector('.profile__edit-button');
let popupProfile = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input_data-name');
let aboutInput = document.querySelector('.popup__input_data-about');
let profilName = document.querySelector('.profile__name');
let profilAbout = document.querySelector('.profile__about');
let popupButton = document.querySelector('.popup__button');
nameInput.value = 'Жак-Ив Кусто';
aboutInput.value = 'Исследователь океана';

if (!formElement) {
    throw new Error('no file')
};
formElement.addEventListener('click', function () {
    popupProfile.classList.add('popup_opened');
});
popupCloseButton.addEventListener('click', function () {
    popupProfile.classList.remove('popup_opened');
})

popupButton.addEventListener('click', function (event) {
    event.preventDefault()
    popupProfile.classList.remove('popup_opened');
    profilName.textContent = nameInput.value;
    profilAbout.textContent = aboutInput.value;
})
