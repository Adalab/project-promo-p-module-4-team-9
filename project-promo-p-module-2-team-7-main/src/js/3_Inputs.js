'use strict';

function handleKeyupInputs(event) {
  event.preventDefault();
  const typeElement = event.target;

  if (typeElement.name === 'name') {
    data.name = typeElement.value;
  } else if (typeElement.name === 'job') {
    data.job = typeElement.value;
  } else if (typeElement.name === 'email') {
    data.email = typeElement.value;
  } else if (typeElement.name === 'phone') {
    data.phone = typeElement.value;
  } else if (typeElement.name === 'linkedin') {
    data.linkedin = typeElement.value;
  } else if (typeElement.name === 'github') {
    data.github = typeElement.value;
  }

  renderPreview(data);
  localStorage.setItem('savedData', JSON.stringify(data));
}

function renderPreview(data) {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = data.name;
  }
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  previewPhone.href = data.phone;
  previewEmail.href = `mailto:${data.email}`;
  previewLinkedin.href = data.linkedin;
  previewGithub.href = data.github;

  profileImage.style.backgroundImage = `url(${data.photo})`;
  profilePreview.style.backgroundImage = `url(${data.photo})`;
}

fillForm.addEventListener('keyup', handleKeyupInputs);

function renderOrNot() {
  renderPreview(data);
  renderPalette(data);
}

renderOrNot();
