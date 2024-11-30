function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('#controls input');
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

    createButton.addEventListener('click', function() {
      const amount = parseInt(input.value);
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
      }
    });

    destroyButton.addEventListener('click', function() {
      destroyBoxes();
    });

    function createBoxes(amount) {
      destroyBoxes();
      for (let i = 0; i < amount; i+=1) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }
  });