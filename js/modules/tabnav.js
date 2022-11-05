export default class TabNav {
  constructor() {
    this.imagemPrincipal = document.querySelector('.animais-imagens-principal img');
    this.imagensThumb = document.querySelectorAll('.animais-imagens-thumb img');
    this.animaisDescricao = document.querySelectorAll('.animais-descricao section');
  }

  mostrarImagem(img, index) {
    // trocar imagem
    const src = img.getAttribute('src');
    const classNomePrincipal = this.imagemPrincipal.attributes[0].nodeValue;
    const novaClass = img.attributes[0].nodeValue;
    this.imagemPrincipal.setAttribute('src', src);
    this.imagemPrincipal.classList.replace(classNomePrincipal, novaClass);

    // trocar descrição
    this.animaisDescricao.forEach((item) => {
      item.classList.remove('ativo');
    });
    const direcao = this.animaisDescricao[index].dataset.anime;
    this.animaisDescricao[index].classList.add('ativo', direcao);
  }

  addEvent() {
    this.imagensThumb.forEach((img, index) => {
      img.addEventListener('click', () => this.mostrarImagem(img, index));
    });
  }

  init() {
    if (this.imagemPrincipal && this.imagensThumb.length && this.animaisDescricao.length) {
      this.addEvent();
    }
    return this;
  }
}
