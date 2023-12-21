export default class SlideAnimais {
  constructor(slide, prev, next) {
    this.slide = document.querySelector(slide);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);

    this.changePrev = this.changePrev.bind(this);
    this.changeNext = this.changeNext.bind(this);
  }

  changePrev() {
    this.slide.style.transform = 'translate3d(0, 0, 0)';
  }

  changeNext() {
    this.slide.style.transform = 'translate3d(-240px, 0, 0)';
  }

  addEvent() {
    this.prev.addEventListener('click', this.changePrev);
    this.next.addEventListener('click', this.changeNext);
  }

  init() {
    if (this.prev && this.next && this.slide) {
      this.addEvent();
    }
    return this;
  }
}
