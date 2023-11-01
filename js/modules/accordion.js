export default class Accordian {
  constructor(perguntas) {
    this.perguntas = document.querySelectorAll(perguntas);

    this.ativarResposta = this.ativarResposta.bind(this);
  }

  ativarResposta(e) {
    e.currentTarget.nextElementSibling.classList.toggle('ativo');
    const ariaExpanded = e.target.getAttribute('aria-expanded');
    if (ariaExpanded === 'true') {
      e.target.setAttribute('aria-expanded', false);
    } else {
      e.target.setAttribute('aria-expanded', true);
    }
  }

  addEvent() {
    this.perguntas.forEach((pergunta) => {
      pergunta.addEventListener('click', this.ativarResposta);
    });
  }

  init() {
    if (this.perguntas.length) {
      this.addEvent();
    }
    return this;
  }
}
