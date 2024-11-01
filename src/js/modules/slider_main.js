import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider_main() {
  if(document.querySelector('.slider_main')) {
    const swiper = new Swiper('.slider_main', {
      spaceBetween: 0,
      loopedSlides: 1,
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
    });
  }
}