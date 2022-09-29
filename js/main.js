"use strict";

var header = document.querySelector('.header');
var headerHight = header.offsetHeight;

window.onscroll = function () {
  if (window.pageYOffset > headerHight) {
    header.classList.add('is-fixed');
  } else {
    header.classList.remove('is-fixed');
  }
};