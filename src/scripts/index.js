'use strict';

const $navToggleBtn = document.querySelector('.nav-toggle');
const $navList = document.querySelector('.nav-list');

$navToggleBtn.addEventListener('click', ({ target }) => {
  target.classList.toggle('is-active');
});
$navList.addEventListener('click', ({ target }) => {
  if (target.tagName === 'A') {
    $navToggleBtn.classList.remove('is-active');
  }
});
