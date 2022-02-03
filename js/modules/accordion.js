export default class Accordion {
  constructor(list) {
    this.accordion = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  addToggleEvent(dt) {
    dt.classList.toggle(this.activeClass);
    dt.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordion.forEach((dt) => {
      dt.addEventListener('click', () => this.addToggleEvent(dt));
    });
  }

  init() {
    if (this.accordion.length) {
      this.addToggleEvent(this.accordion[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
