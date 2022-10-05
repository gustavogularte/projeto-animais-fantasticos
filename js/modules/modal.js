export default function initModal() {
  const containerModal = document.querySelector('[data-modal="container"]');
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickFora(e) {
    e.preventDefault();
    if (e.target === this) {
      containerModal.classList.remove('ativo');
    }
  }

  botaoAbrir.addEventListener('click', toggleModal);
  botaoFechar.addEventListener('click', toggleModal);
  containerModal.addEventListener('click', clickFora)
}