export default class Accordion {
  constructor(list) {
    this.dt = document.querySelectorAll(list);
  }

  mostrarPergunta() {
    this.nextElementSibling.classList.toggle('ativo');
    this.classList.toggle('ativo');
  }

  addEvent() {
    this.dt.forEach((perguntas) => {
      perguntas.addEventListener('click', this.mostrarPergunta);
    });
  }

  init() {
    if (this.dt.length) {
      this.addEvent();
    }
    return this;
  }
}
