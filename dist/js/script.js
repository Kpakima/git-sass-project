const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
const menuBtnBurger = document.querySelector('.menu-btn-burger');
const navListItem = document.querySelectorAll('.nav-list-item');

const openNavF = function () {
  navList.classList.toggle('open-nav');
  menuBtnBurger.classList.toggle('open-nav');
  navListItem.forEach((item) => item.classList.toggle('open-nav'));
};

menuBtn.addEventListener('click', openNavF);
