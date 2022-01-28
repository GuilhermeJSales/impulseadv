import MenuMobile from './modules/menu-mobile.js';

const mobileMenu = new MenuMobile('[data-menu="button"]', '[data-menu = "nav"]', '[data-menu = "nav"] li');

mobileMenu.init();
