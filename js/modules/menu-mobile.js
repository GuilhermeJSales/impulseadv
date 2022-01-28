export default class MenuMobile {
  constructor(mobileMenu, ulMenu, liMenu) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.ulMenu = document.querySelector(ulMenu);
    this.liMenu = document.querySelectorAll(liMenu);
    this.activeClass = 'active';
    this.html = document.documentElement;
    this.outside = 'outside';

    this.addMenuClass = this.addMenuClass.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  addMenuClass() {
    this.mobileMenu.classList.add(this.activeClass);
    this.ulMenu.classList.add(this.activeClass);
    this.outsideClick(this.ulMenu);
    this.animateLinks();
  }

  animateLinks() {
    this.liMenu.forEach((links, index) => {
      links.style.animation
        ? (links.style.animation = '')
        : (links.style.animation = `fadeSlide .5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  outsideClick(element) {
    if (!element.hasAttribute(this.outside)) {
      element.setAttribute(this.outside, '');
      setTimeout(() => {
        this.html.addEventListener('click', this.handleOutsideClick);
      });
    }
  }

  handleOutsideClick(event) {
    if (this.ulMenu !== event.target) {
      this.html.removeEventListener('click', this.handleOutsideClick);
      this.ulMenu.removeAttribute(this.outside);
      this.mobileMenu.classList.remove(this.activeClass);
      this.ulMenu.classList.remove(this.activeClass);
      this.liMenu.forEach((link) => {
        link.style.animation = '';
      });
    }
  }

  addEventMenu() {
    this.mobileMenu.addEventListener('click', this.addMenuClass);
  }

  init() {
    if (this.mobileMenu) {
      this.addEventMenu();
    }
    return this;
  }
}
