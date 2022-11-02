export default function initHorario() {
  const agora = new Date();
  const infoHorarios = document.querySelector('[data-semana]');
  const horarios = infoHorarios.dataset.horarios.split(',').map(Number);
  const dias = infoHorarios.dataset.semana.split(',').map(Number);

  const horaAgora = agora.getHours();
  const diaAgora = agora.getDay();
  const horaAberto = horaAgora >= horarios[0] && horaAgora < horarios[1];
  const diaAberto = !!dias.indexOf(diaAgora);
  const aberto = diaAberto && horaAberto;

  if (aberto) {
    infoHorarios.classList.add('aberto');
  } else {
    infoHorarios.classList.add('fechado');
  }
}
