'use strict';

function resetCard() {
  previewName.innerHTML = 'Nombre Apellido';
  previewJob.innerHTML = 'Front-end developer';
  btn.classList.remove('js-greyButton');
  shareCardSection.classList.add('js-createHidden');
  resetImage.style.backgroundImage = '';
  resetPreviewImg.style.backgroundImage = '';
  previewContainer.classList.add('palette-1');
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.remove('palette-3');
  radioButton1.checked = '';
  radioButton2.checked = '';
  radioButton3.checked = '';
}

function handleClickReset(event) {
  event.preventDefault();
  for (const item of resetInput) {
    item.value = '';
  }
  localStorage.removeItem('savedData');
  resetCard();
}

buttonReset.addEventListener('click', handleClickReset);
