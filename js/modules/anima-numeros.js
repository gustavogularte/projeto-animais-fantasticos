export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  function animarNumeros() {
    numeros.forEach(numero => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100) ;
  
      let i = 0;
      const timer = setInterval(() => {
        i += incremento;
        numero.innerText = i;
        if (i > total) {
          numero.innerText = total;
          clearInterval(timer);
        };
      }, 30 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      animarNumeros();
      observe.disconnect();
    }
  }

  const observe = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector('.numeros');
  observe.observe(observeTarget, {attributes: true});
};