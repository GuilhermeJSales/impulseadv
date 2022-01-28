import MenuMobile from './modules/menu-mobile.js';
import SmoothScroll from './modules/smooth-scroll.js';

const mobileMenu = new MenuMobile('[data-menu="button"]', '[data-menu = "nav"]', '[data-menu = "nav"] li');

mobileMenu.init();

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();
