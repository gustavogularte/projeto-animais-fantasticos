export default function initAccordion() {
  const dt = document.querySelectorAll('.js-faq dt');
  
  function mostrarPergunta() {
    this.nextElementSibling.classList.toggle('ativo');
    this.classList.toggle('ativo');
  }
  
  dt.forEach(perguntas => {
    perguntas.addEventListener('click', mostrarPergunta);
  });
}
