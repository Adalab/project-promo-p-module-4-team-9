'use strict';

function hiddeFieldset(event) {
  event.preventDefault();
  if (
    form2.classList.contains('collapsed') &&
    arrowUp.classList.contains('fa-transform')
  ) {
    form2.classList.remove('collapsed');
    arrowUp.classList.remove('fa-transform');
    design.classList.add('collapsed');
    designArrow.classList.add('fa-transform');
    share.classList.add('collapsed');
    shareArrow.classList.add('fa-transform')

  } else {
    form2.classList.add('collapsed');
    arrowUp.classList.add('fa-transform');
  }
}

function handleClickDesign (event) {
  event.preventDefault();
  if (
    design.classList.contains('collapsed') &&
    designArrow.classList.contains('fa-transform')
  ) {
    design.classList.remove('collapsed');
    designArrow.classList.remove('fa-transform');
    form2.classList.add('collapsed');
    arrowUp.classList.add('fa-transform');
    share.classList.add('collapsed');
    shareArrow.classList.add('fa-transform');

  } else {
    design.classList.add('collapsed');
    designArrow.classList.add('fa-transform');
  }
}

function handleClickShare (event) {
  event.preventDefault();
  if (
    share.classList.contains('collapsed') &&
    shareArrow.classList.contains('fa-transform')
  ) {
    share.classList.remove('collapsed');
    shareArrow.classList.remove('fa-transform');
    design.classList.add('collapsed');
    designArrow.classList.add('fa-transform');
    form2.classList.add('collapsed');
    arrowUp.classList.add('fa-transform');

  } else {
    share.classList.add('collapsed');
    shareArrow.classList.add('fa-transform');
  }
}


fill.addEventListener('click', hiddeFieldset);
designLegend.addEventListener('click', handleClickDesign);
shareLegend.addEventListener('click', handleClickShare);