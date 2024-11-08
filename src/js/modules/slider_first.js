import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function sliderFirst() {
  if(document.querySelector('.swiper_first')) {
    const swiper = new Swiper('.swiper_first', {
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