const nightBtn = document.querySelector('.night-mode-btn');
const body = document.querySelector('body');

nightBtn.addEventListener('click', function() {
  if(body.className === 'night') {
    body.className = '';
    nightBtn.textContent = 'Включить ночной режим';
  } else {
    body.className = 'night';
    nightBtn.textContent = 'Выключить ночной режим';
  }
});