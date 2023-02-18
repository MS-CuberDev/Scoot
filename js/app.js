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

let className = "scroll-nav";
const scrollTrigger = 820;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("nav")[0].classList.add(className);
  } else {
    document.getElementsByTagName("nav")[0].classList.remove(className);
  }
};
