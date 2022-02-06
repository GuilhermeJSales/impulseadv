export default class AnimationScroll {
  constructor(sections, animaIndex) {
    this.sections = document.querySelectorAll(sections);
    this.menuLi = document.querySelectorAll(animaIndex);
    this.activeClass = 'active';
    this.windowPercent = window.innerHeight * 0.8;

    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowPercent),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.activeClass);
      }
    });
  }

  menuAnimate() {
    this.menuLi.forEach((item, index) => {
      if (window.innerWidth > 1000) {
        item.style.animation = `animateMenu .2s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.menuAnimate();
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
  }
}
