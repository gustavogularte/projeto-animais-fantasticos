export default class ScrollSuave {
  constructor(linksInternos) {
    this.linksInternos = document.querySelectorAll(linksInternos);
  }

  ativarScroll(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }

  addEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.ativarScroll);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addEvent();
    }
  }
}
