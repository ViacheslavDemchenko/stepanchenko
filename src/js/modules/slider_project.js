import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function sliderProject() {
  if(document.querySelector('.slider_project')) {
    const swiper = new Swiper('.slider_project', {
      slidesPerView: 4,
      spaceBetween: 40,
      loopedSlides: 1,
      // loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".left-first",
        prevEl: ".right-first",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 17
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
  }
}
