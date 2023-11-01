export default class ScrollAnimacao {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.ativarSection = this.ativarSection.bind(this);
  }

  ativarSection() {
    const metadeHeight = window.innerHeight * 0.7;
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < metadeHeight) {
        section.classList.add('ativo');
      }
    });
  }

  addEvent() {
    window.addEventListener('scroll', this.ativarSection);
  }

  init() {
    if (this.sections.length) {
      this.addEvent();
    }
    return this;
  }
}
