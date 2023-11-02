import clickFora from './clickFora';

export default class Dropdown {
  constructor(dropdown) {
    this.dropdown = document.querySelector(dropdown);
  }

  abrirDropdown(e) {
    e.preventDefault();
    const elemento = e.currentTarget;
    elemento.classList.toggle('ativo');

    if (elemento.getAttribute('aria-expanded') === 'false') {
      clickFora(this, () => {
        this.classList.remove('ativo');
        elemento.setAttribute('aria-expanded', 'false');
      });
    }

    if (elemento.classList.contains('ativo')) {
      elemento.setAttribute('aria-expanded', 'true');
    } else {
      elemento.setAttribute('aria-expanded', 'false');
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
