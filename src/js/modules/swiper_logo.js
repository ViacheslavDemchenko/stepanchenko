import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function swiperLogo() {
  if(document.querySelector('.swiper_logo')) {
    const swiper = new Swiper('.swiper_logo', {
      slidesPerView: 5,
      spaceBetween: 40,
      loopedSlides: 1,
      // loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".left-second",
        prevEl: ".right-second",
      },
      breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 18,
        },
        768: {
          slidesPerView: 2.8,
          spaceBetween: 20
      },
        1440: {
          slidesPerView: 5,
          spaceBetween: 40
        }
      }
    });
  }
}
