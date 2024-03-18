const modal = document.querySelector('.modal');
const showButton = document.querySelector('.footer-button');
const close = document.querySelector('.modal-close');
const form = document.querySelector('.login-form');
const login = modal.querySelector('[name="login"]');
const email = modal.querySelector('[name="mail"]');

showButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove('visually-hidden');
  login.focus();
});

close.addEventListener("click", function() {
  modal.classList.add('visually-hidden');
  modal.classList.remove('modal-error');
});

form.addEventListener("submit", function(evt){
  if (!login.value || !email.value) {
    evt.preventDefault();
    modal.classList.add('modal-error');
  }
});


window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (!modal.classList.contains('visually-hidden')) {
      evt.preventDefault();
      modal.classList.add('visually-hidden');
      modal.classList.remove('modal-error');
    }
  }
})
