require('polyfill-nodelist-foreach'); // Полифил для поддержки метода forEach в IE11+ и Safari9
require('svgxuse'); // Полифил для поддержки IE11+ и старыми браузерами использования SVG через use 


import mobileMenu from './modules/mobileMenu'; // Мобильное меню
import sliderFirst from './modules/slider_first';
import sliderProject from './modules/slider_project';
import swiperLogo from './modules/swiper_logo';


sliderFirst();
sliderProject();
swiperLogo();
mobileMenu();