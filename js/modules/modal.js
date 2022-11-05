export default class initModal {
  constructor() {
    this.containerModal = document.querySelector('[data-modal="container"]');
    this.botaoAbrir = document.querySelector('[data-modal="abrir"]');
    this.botaoFechar = document.querySelector('[data-modal="fechar"]');

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickFora = this.clickFora.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  clickFora(e) {
    if (e.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickFora);
  }

  init() {
    this.addEvent();
    return this;
  }
}
