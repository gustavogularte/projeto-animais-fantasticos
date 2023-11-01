export default class TabNav {
  constructor(imgPrincipal, thumbs, conteudo) {
    this.imgPrincipal = document.querySelector(imgPrincipal);
    this.thumbs = document.querySelectorAll(thumbs);
    this.conteudo = document.querySelectorAll(conteudo);

    this.ativarConteudo = this.ativarConteudo.bind(this);
  }

  ativarConteudo(thumb, index) {
    const src = thumb.getAttribute('src');
    const alt = thumb.getAttribute('alt');
    this.imgPrincipal.setAttribute('src', src);
    this.imgPrincipal.setAttribute('alt', alt);

    this.conteudo.forEach((section) => {
      section.classList.remove('ativo');
    });
    this.conteudo[index].classList.add('ativo', this.conteudo[index].dataset.anime);
  }

  addEvent() {
    this.thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        this.ativarConteudo(thumb, index);
      });
    });
  }

  init() {
    if (this.imgPrincipal && this.thumbs.length && this.conteudo.length) {
      this.addEvent();
    }
    return this;
  }
}
