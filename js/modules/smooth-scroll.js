export default class SmoothScroll {
  constructor(links) {
    this.sections = document.querySelectorAll(links);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    this.sections = document.querySelector(href);
    this.sections.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  addEventScroll() {
    this.sections.forEach((links) => {
      links.addEventListener('click', this.handleClick);
    });
  }

  init() {
    if (this.sections) {
      this.addEventScroll();
    }
    return this;
  }
}
