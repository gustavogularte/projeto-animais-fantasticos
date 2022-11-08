import outsideClick from './outsideclick.js';

export default class initMenuMobile {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.eventos = ['click'];
    this.drop = document.querySelector('[data-dropdown]');

    this.ativarMenu = this.ativarMenu.bind(this);
  }

  ativarMenu() {
    this.menuList.classList.add('ativo');
    this.drop.classList.add('ativo');
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove('ativo');
    });
  }

  addEvent() {
    this.eventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.ativarMenu);
    });
  }

  init() {
    this.addEvent();
    return this;
  }
}
