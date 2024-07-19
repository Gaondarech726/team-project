const modal = document.querySelector('.modal-window');
const backdrop = document.querySelector('.backdrop');

function clickHandler(event) {
  console.log(event);
  if (event.target.closest('.event')) {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  } else if (event.target.closest('.backdrop')) {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
  } else if (event.target.closest('.close')) {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
  }
}

document.addEventListener('click', clickHandler);
