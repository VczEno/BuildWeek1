document.addEventListener('DOMContentLoaded', () => {
  let checkbox = document.querySelector('.checkbox-container input');
  let button = document.querySelector('.blue-btn');
  let text = document.querySelector('#blinkTxt')

  // grande vin 
  button.addEventListener('click', (event) => {
    if (!checkbox.checked) {
      event.preventDefault();
      blinkText(text, 3)
    }
  });

  function blinkText(element, times) {
    let count = 0;
    let blinkInterval = setInterval(() => {
      element.style.color = (count++ % 2 === 0) ? '#d20094' : '';
      if (count === times * 2) {
        clearInterval(blinkInterval);
        element.style.color = '';
      }
    }, 500);
  }
});

//lisa, hover bottone
const button = document.getElementById('bottone');;

button.addEventListener('mouseover', () => {
  button.classList.add('hovered-button');
});

button.addEventListener('mouseout', () => {
  button.classList.remove('hovered-button');
});