class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);
    this.dist = { posicaoFinal: 0, começo: 0, movimento: 0 };
    this.changeEvent = new Event('changeEvent');
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .3s' : '';
  }

  onStart(e) {
    let type;
    if (e.type === 'touchstart') {
      this.dist.começo = e.changedTouches[0].clientX;
      type = 'touchmove';
    } else {
      e.preventDefault();
      this.dist.começo = e.clientX;
      type = 'mousemove';
    }
    this.transition(false);
    this.wrapper.addEventListener(type, this.onMove);
  }

  onMove(e) {
    const type = e.type === 'mousemove' ? e.clientX : e.changedTouches[0].clientX;
    this.dist.movimento = -(this.dist.começo - type) * 1.5;
    const clientX = this.dist.posicaoFinal + this.dist.movimento;
    this.moveSlide(clientX);
  }

  moveSlide(clientX) {
    this.slide.style.transform = `translate3d(${clientX}px, 0, 0)`;
  }

  onEnd(e) {
    const type = e.type === 'mouseup' ? 'mousemove' : 'touchmove';
    this.dist.posicaoFinal += this.dist.movimento;
    this.wrapper.removeEventListener(type, this.onMove);
    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.dist.movimento > 120 && this.index.prev !== null) {
      this.dist.movimento = 0;
      this.changeSlide(this.index.prev);
    } else if (this.dist.movimento < -120 && this.index.next !== null) {
      this.dist.movimento = 0;
      this.changeSlide(this.index.next);
    } else {
      this.changeSlide(this.index.active);
    }
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slideConfig() {
    this.slideArray = [...this.slide.children].map((item) => {
      const position = this.slidePosition(item);
      return {
        item,
        position,
      };
    });
  }

  slideIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : null,
      active: index,
      next: index === last ? null : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.dist.posicaoFinal = activeSlide.position;
    this.moveSlide(activeSlide.position);
    this.slideIndexNav(index);
    this.ativarSlide();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  ativarSlide() {
    this.slideArray.forEach((item) => item.item.classList.remove('ativo'));
    this.slideArray[this.index.active].item.classList.add('ativo');
  }

  onResize() {
    setTimeout(() => {
      this.slideConfig();
      this.changeSlide(this.index.active);
    }, 500);
  }

  addEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
    window.addEventListener('resize', this.onResize);
  }

  addBind() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = this.onResize.bind(this);

    this.activeControl = this.activeControl.bind(this);
  }

  init() {
    if (this.wrapper && this.slide) {
      this.addBind();
      this.transition(true);
      this.addEvents();
      this.slideConfig();
      this.changeSlide(0);
    }
    return this;
  }
}

export default class SlideControls extends Slide {
  createControl() {
    const control = document.createElement('ul');
    control.dataset.control = 'slide';
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${
        index + 1
      }</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  addEventControl() {
    this.arrayControl.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.changeSlide(index);
      });
    });
    this.wrapper.addEventListener('changeEvent', this.activeControl);
  }

  activeControl() {
    this.arrayControl.forEach((item) => {
      item.classList.remove('ativo');
    });
    this.arrayControl[this.index.active].classList.add('ativo');
  }

  addControl(customControl) {
    this.control = document.querySelector(customControl) || this.createControl();
    this.arrayControl = [...this.control.children];
    this.activeControl();
    this.addEventControl();
  }
}
