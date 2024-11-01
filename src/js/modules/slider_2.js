import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider_2() {
  if(document.querySelector('.slider_2')) {
    const swiper = new Swiper('.slider_2', {
      slidesPerView: 4.5,
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
          slidesPerView: 2.5,
          spaceBetween: 20
      },
        1440: {
          slidesPerView: 4.5,
          spaceBetween: 40
        }
      }
    });
  }
}
