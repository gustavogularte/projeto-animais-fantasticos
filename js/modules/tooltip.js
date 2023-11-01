export default class Tooltip {
  constructor(img) {
    this.img = document.querySelector(img);

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseOver({ currentTarget }) {
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    this.tooltipBox.style.left = `${e.pageX + 20}px`;
  }

  onMouseLeave(img) {
    this.tooltipBox.remove();
    img.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
  }

  criarTooltipBox(img) {
    const tooltipBox = document.createElement('div');
    const texto = img.getAttribute('aria-label');
    tooltipBox.innerText = texto;
    tooltipBox.classList.add('tooltip');
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  addEvent() {
    this.img.addEventListener('mouseover', this.onMouseOver);
  }

  init() {
    if (this.img) {
      this.addEvent();
    }
    return this;
  }
}
