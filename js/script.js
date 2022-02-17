import MenuMobile from './modules/menu-mobile.js';
import SmoothScroll from './modules/smooth-scroll.js';
import AnimaNumeros from './modules/anima-numeros.js';
import Accordion from './modules/accordion.js';
import AnimationScroll from './modules/scroll-animation.js';
import SlideNav from './modules/slide.js';

const mobileMenu = new MenuMobile('[data-menu="button"]', '[data-menu = "nav"]', '[data-menu = "nav"] li');
mobileMenu.init();

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();

const animaNumeros = new AnimaNumeros('[data-numeros]', '.numeros', 'active');
animaNumeros.init();

const accordionList = new Accordion('[data-accordion] dt');
accordionList.init();

const scrollAnimation = new AnimationScroll('[data-scroll]', '[data-index]');
scrollAnimation.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
