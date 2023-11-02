import clickFora from './clickFora';

export default class MenuMobile {
  constructor(botao, menu) {
    this.botao = document.querySelector(botao);
    this.menu = document.querySelector(menu);

    this.abrirMenu = this.abrirMenu.bind(this);
  }

  abrirMenu() {
    this.menu.classList.toggle('ativo');

    if (this.botao.getAttribute('aria-expanded') === 'false') {
      clickFora(this.menu, () => {
        this.menu.classList.remove('ativo');
        this.botao.setAttribute('aria-expanded', 'false');
      });
    }
    this.botao.setAttribute('aria-expanded', 'true');
  }

  addEvent() {
    this.botao.addEventListener('click', this.abrirMenu);
  }

  init() {
    if (this.menu && this.botao) {
      this.addEvent();
    }
    return this;
  }
}
