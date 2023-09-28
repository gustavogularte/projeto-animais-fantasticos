export default class Modal {
  constructor(modalContainer, abrir, fechar) {
    this.modalContainer = document.querySelector(modalContainer);
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.modalContainer.classList.toggle('ativo');
    console.log(e.target)
  }

  addEvent() {
    this.abrir.addEventListener('click', this.toggleModal);
    this.fechar.addEventListener('click', this.toggleModal);
  }

  init() {
    this.addEvent();
  }
}
