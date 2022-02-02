import MenuMobile from './modules/menu-mobile.js';
import SmoothScroll from './modules/smooth-scroll.js';
import AnimaNumeros from './modules/anima-numeros.js';

const mobileMenu = new MenuMobile('[data-menu="button"]', '[data-menu = "nav"]', '[data-menu = "nav"] li');
mobileMenu.init();

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();

const animaNumeros = new AnimaNumeros('[data-numeros]', '.numeros-bg', 'active');
animaNumeros.init();
