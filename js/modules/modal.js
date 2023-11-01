export default class Modal {
  constructor(modalContainer, abrir, fechar) {
    this.modalContainer = document.querySelector(modalContainer);
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);

    this.toggleModal = this.toggleModal.bind(this);
    this.clickFora = this.clickFora.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  clickFora(e) {
    if (e.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addEvent() {
    this.abrir.addEventListener('click', this.toggleModal);
    this.fechar.addEventListener('click', this.toggleModal);
    this.modalContainer.addEventListener('click', this.clickFora);
  }

  init() {
    if (this.modalContainer && this.abrir && this.fechar) {
      this.addEvent();
    }
    return this;
  }
}
