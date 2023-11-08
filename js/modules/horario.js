export default class Horario {
  constructor(semana, horario) {
    this.semana = document.querySelector(semana);
    this.horario = document.querySelector(horario);
  }

  dataHoje() {
    const hoje = new Date();
    const diaHoje = hoje.getDay();
    const horaHoje = hoje.getHours();
    this.funcionamento(diaHoje, horaHoje);
  }

  funcionamento(diaHoje, horaHoje) {
    const semana = this.semana.dataset.semana.split(',').map(Number);
    const horario = this.horario.dataset.horario.split(',').map(Number);
    const diaAberto = semana.indexOf(diaHoje) !== -1;
    const horaAberto = horaHoje >= horario[0] && horaHoje < horario[1];

    this.aberto(diaAberto, horaAberto);
  }

  aberto(diaAberto, horaAberto) {
    if (diaAberto && horaAberto) {
      this.semana.classList.add('aberto');
    }
  }

  init() {
    if (this.semana && this.horario) {
      this.dataHoje();
    }
    return this;
  }
}
