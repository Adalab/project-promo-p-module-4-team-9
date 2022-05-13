'use strict';
//1-collapsibles
const designLegend = document.querySelector('.js-designLegend');
const design = document.querySelector('.js-design');
const designArrow = document.querySelector('.js-designArrow');
const fill = document.querySelector('.js-desplegable');
const form2 = document.querySelector('.js-fieldset');
const arrowUp = document.querySelector('.js-icon-rellena');
const shareLegend = document.querySelector('.js-title_share');
const share = document.querySelector('.js-share');
const shareArrow = document.querySelector('.js-shareArrow');
//2-palettes
const previewContainer = document.querySelector('.js-preview-container');
const radioButton1 = document.querySelector('.js-input-1');
const radioButton2 = document.querySelector('.js-input-2');
const radioButton3 = document.querySelector('.js-input-3');
//3-load inputs
const fillForm = document.querySelector('.js-fieldset');
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewPhone = document.querySelector('.js-preview-phone');
const previewEmail = document.querySelector('.js-preview-email');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGithub = document.querySelector('.js-preview-github');
// Reset
const resetImage = document.querySelector('.js_reset_image');
const resetPreviewImg = document.querySelector('.js_reset_previewimg');
// Share
const generatedUrl = document.querySelector('.js_shareUrl');
const shareOnTwitter = document.querySelector('.js_shareTwitter');
const savedData = JSON.parse(localStorage.getItem('savedData'));
const messageCard = document.querySelector('.js-text-share');
//
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

const data = savedData || {
  palette: '',
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: './assets/images/gatito.jpg',
};
//5-6cards
const btn = document.querySelector('.js_bntCreate');
const shareCardSection = document.querySelector('.js-shareCard');
//5-6 reset
const buttonReset = document.querySelector('.js_buttonReset');
let resetInput = document.querySelectorAll('.js_resetInput');
