export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static addNumberAnimation(numero) {
    const total = +numero.innerHTML;
    let start = 0;
    const incremento = Math.floor(total / 100 + 1);
    const timer = setInterval(() => {
      start += incremento;
      numero.innerHTML = start;
      if (start > total) {
        clearInterval(timer);
        numero.innerText = total;
      }
    }, 25);
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.addNumberAnimation(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass));
    this.observer.disconnect;
    this.animaNumeros();
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
