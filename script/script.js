let popup = document.querySelector('.popup');
let buttenOpen = document.querySelector('.profile__author-btn');
let buttenClose = document.querySelector('.popup__button-close');

//подключение класса с dyspley:block//
buttenOpen.addEventListener('click', function () {
  popup.classList.add('popup_opened');
})
//отключение класса с dyspley:block//
buttenClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
})

let formElement = document.querySelector('.popup__container');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('job');

let profileAuthor = document.querySelector('.profile__author');
let profileAuthorSubtitle = document.querySelector('.profile__author-subtitle');

//заполняем форму содержиым профиля//
nameInput.value = profileAuthor.textContent;
jobInput.value = profileAuthorSubtitle.textContent;


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileAuthorSubtitle.textContent = jobInput.value
}

formElement.addEventListener('submit', handleFormSubmit);

//красим сердечко//
let heart = document.querySelectorAll('.image__element-heart');

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener('click', function () {
    heart[i].classList.toggle('image__element-heart_activ');
  })
}
