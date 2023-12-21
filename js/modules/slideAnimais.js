export default class SlideAnimais {
  constructor(buttons, slide) {
    this.buttons = document.querySelectorAll(buttons);
    this.slide = document.querySelector(slide);

    this.changeSlide = this.changeSlide.bind(this);
    console.log(this.slide.clientWidth)
  }

  changeSlide() {
    this.slide.style.transform = `translate3d(${-this.slide.clientWidth}px, 0, 0)`;
  }

  addEvent() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', this.changeSlide);
    });
  }

  init() {
    if (this.buttons.length) {
      this.addEvent();
    }
    return this;
  }
}
