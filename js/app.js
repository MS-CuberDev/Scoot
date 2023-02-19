const menuBar = document.querySelector('.menu__bar');
const menuBurger = document.querySelector('.menu__burger');
const html = document.querySelector('html');
const bodyDarken = document.querySelector('#bodyDarken');

function openMenuBar() {
    menuBar.classList.toggle('menu__bar-open');
    menuBurger.classList.toggle('menu__burger-active');
    html.classList.toggle('lock');
    bodyDarken.classList.toggle('body-darken');
}

function menuBarClose() {
  menuBar.classList.remove('menu__bar-open');
  menuBurger.classList.remove('menu__burger-active');
  bodyDarken.classList.remove('body-darken');
  html.classList.remove('lock');
}

const spoilerHead = document.querySelectorAll("[data-name='spoiler-head']");
const spoilerArrow = document.querySelectorAll("#spoiler-arrow-open");

spoilerHead.forEach(function (item) {
  item.addEventListener("click", spoilerClick);
});

function spoilerClick() {
  this.nextElementSibling.classList.toggle("spoiler-text-hide");
  spoilerArrow.classList.toggle("spoiler-arrow-open");
}
