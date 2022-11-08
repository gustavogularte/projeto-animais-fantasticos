import outsideClick from './outsideclick.js';

export default class initDropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
  }

  handleClick(e) {
    e.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  addEvent() {
    this.dropdownMenus.forEach((menu) => {
      ['touchstart', 'click'].forEach((evento) => {
        menu.addEventListener(evento, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEvent();
    }
    return this;
  }
}
