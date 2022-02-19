export default class ValidarEmail {
  constructor(email) {
    this.email = document.getElementById(email);
  }

  validateEmail(emailElement) {
    this.emailValido = emailElement.match(/[\w.-]+@[\w-]+\.[\w]+/gi);
    return (this.emailValido && this.emailValido[0] === emailElement);
  }

  validarNaMudanca(emailElement) {
    if (this.validateEmail(emailElement.value)) {
      emailElement.style.border = '2px solid green';
      emailElement.nextElementSibling.classList.remove('ativar');
    } else {
      emailElement.style.border = '2px solid red';
      emailElement.style.marginBottom = '0';
      emailElement.nextElementSibling.classList.add('ativar');
    }
  }

  createErrorText() {
    const span = document.createElement('span');
    span.innerText = 'Email Inválido';
    span.style.color = 'red';
    span.classList.add('erro-text');
    this.email.parentElement.insertBefore(span, this.email.nextElementSibling);
  }

  addValidEvents() {
    this.email.addEventListener('change', () => {
      this.validarNaMudanca(this.email);
    });
  }

  init() {
    this.addValidEvents();
    this.createErrorText();
    return this;
  }
}
