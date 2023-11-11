export default class animaisNumeros {
  constructor(section, numeros, animais) {
    this.sectionObserver = document.querySelector(section);
    this.numeros = document.querySelectorAll(numeros);
    this.animais = document.querySelectorAll(animais);

    this.handleMutation = this.handleMutation.bind(this);
  }

  async fetchAnimais() {
    try {
      const response = await fetch('../../animaisapi.json');
      const json = await response.json();
      this.animais.forEach((animal, index) => {
        animal.innerText = json[index].especie;
        this.numeros[index].innerText = json[index].total;
      });
      this.animarNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  animarNumeros() {
    this.numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let ct = 0;
      const timer = setInterval(() => {
        numero.innerText = ct;
        ct += incremento;
        if (ct > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      this.observer.disconnect();
      this.fetchAnimais();
    }
  }

  addEvent() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.sectionObserver, { attributes: true });
  }

  init() {
    if (this.numeros.length) {
      this.addEvent();
    }
    return this;
  }
}
