export default class Horario {
  constructor(infoHorarios) {
    this.infoHorarios = document.querySelector(infoHorarios);
  }

  funcionamento() {
    this.horarios = this.infoHorarios.dataset.horarios.split(',').map(Number);
    this.dias = this.infoHorarios.dataset.semana.split(',').map(Number);
  }

  agora() {
    this.agora = new Date();
    this.horaAgora = this.agora.getUTCHours() - 3;
    this.diaAgora = this.agora.getDay();
  }

  estaAberto() {
    this.horaAberto = this.horaAgora >= this.horarios[0] && this.horaAgora < this.horarios[1];
    this.diaAberto = !!this.dias.indexOf(this.diaAgora);

    return this.diaAberto && this.horaAberto;
  }

  ativarStatus() {
    if (this.estaAberto()) {
      this.infoHorarios.classList.add('aberto');
    } else {
      this.infoHorarios.classList.add('fechado');
    }
  }

  init() {
    this.funcionamento();
    this.agora();
    this.ativarStatus();
    return this;
  }
}
