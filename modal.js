const popup = document.getElementById('js-popup');
const showBtn = document.getElementById('js-show-popup');
const background = document.getElementById('js-black-bg');
const text = document.getElementById('text');

showBtn.addEventListener('click', (e) => {
  popup.classList.toggle('is-show');
  text.innerHTML = 'modal';
});

background.addEventListener('click', (e) => {
  popup.classList.toggle('is-show');
});
