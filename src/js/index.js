require('polyfill-nodelist-foreach'); // Полифил для поддержки метода forEach в IE11+ и Safari9
require('svgxuse'); // Полифил для поддержки IE11+ и старыми браузерами использования SVG через use 


import mobileMenu from './modules/mobileMenu'; // Мобильное меню
import slider_main from './modules/slider_main';
import slider_1 from './modules/slider_1';
import slider_2 from './modules/slider_2';


slider_main();
slider_1();
slider_2();
mobileMenu();