export default class initTooltip {
  constructor() {
    this.tooltip = document.querySelectorAll('[data-tooltip]');

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 200}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  onMouseLeave(e) {
    this.tooltipBox.remove();
    e.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    e.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseOver(e) {
    this.criarTooltipBox(e.currentTarget);

    e.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    e.currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  addEvent() {
    this.tooltip.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltip.length) {
      this.addEvent();
    }
    return this;
  }
}
