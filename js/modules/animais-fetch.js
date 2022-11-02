import initAnimaNumeros from './anima-numeros.js';

export default function initAnimaisFetch() {
  function createDiv(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function animaisFetch(url) {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      const gridAnimal = document.querySelector('.grid-numeros');

      responseJson.forEach((animal) => {
        const div = createDiv(animal);
        gridAnimal.appendChild(div);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  animaisFetch('./animaisapi.json');
}
