const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-wrap');
const menuItems = document.querySelectorAll('.nav-wrap .nav li a');
const html = document.documentElement; // Селектор для тега <html>

// Открытие и закрытие меню по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  menu.classList.toggle('nav-wrap_open');
  html.classList.toggle('no-scroll'); // Добавление/удаление класса no-scroll
});

// Закрытие меню при клике на любой пункт меню
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    burger.classList.remove('burger_active');
    menu.classList.remove('nav-wrap_open');
    html.classList.remove('no-scroll'); // Удаление класса no-scroll
  });
});

// Закрытие меню при расширении экрана до 1440px и более
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1440) {
    burger.classList.remove('burger_active');
    menu.classList.remove('nav-wrap_open');
    html.classList.remove('no-scroll'); // Удаление класса no-scroll
  }
});
