import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.5;

    this.checkDistance = debounce(this.checkDistance.bind(this), 30);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        element: section,
        sectionTop: Math.floor(sectionTop - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.sectionTop) {
        section.element.classList.add('ativo');
      }
    });
  }

  init() {
    this.getDistance();
    this.checkDistance();
    window.addEventListener('scroll', this.checkDistance);
    return this;
  }
}
