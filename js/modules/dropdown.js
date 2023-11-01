import cliqueFora from './clickFora';

export default class Dropdown {
  constructor(dropdown) {
    this.dropdown = document.querySelector(dropdown);
  }

  abrirDropdown(e) {
    e.preventDefault();
    const elemento = e.currentTarget;
    elemento.classList.add('ativo');

    if (elemento.getAttribute('aria-expanded') === 'false') {
      cliqueFora(this, () => {
        this.classList.remove('ativo');
      });
    }
  }

  addEvent() {
    this.dropdown.addEventListener('click', this.abrirDropdown);
  }

  init() {
    if (this.dropdown) {
      this.addEvent();
    }
    return this;
  }
}
