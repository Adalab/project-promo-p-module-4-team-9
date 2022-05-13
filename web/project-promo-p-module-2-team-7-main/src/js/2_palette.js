'use strict';

function handleClick1() {
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.remove('palette-3');
  previewContainer.classList.add('palette-1');
}

function handleClick2() {
  previewContainer.classList.remove('palette-1');
  previewContainer.classList.remove('palette-3');
  previewContainer.classList.add('palette-2');
}

function handleClick3() {
  previewContainer.classList.remove('palette-1');
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.add('palette-3');
}

radioButton1.addEventListener('click', handleClick1);
radioButton2.addEventListener('click', handleClick2);
radioButton3.addEventListener('click', handleClick3);

function handleClicPalette(event) {
  data.palette = parseInt(event.currentTarget.id);
  return data.palette;
}
function listenersPalettes() {
  //listener de las paletas
  const paletteInputs = document.querySelectorAll('.js-option-input');
  for (const item of paletteInputs) {
    item.addEventListener('click', handleClicPalette);
  }
}

function renderPalette(data) {
  if (data.palette === 1) {
    handleClick1();
  } else if (data.palette === 2) {
    handleClick2();
  } else if (data.palette === 3) {
    handleClick3();
  }
}

listenersPalettes();
