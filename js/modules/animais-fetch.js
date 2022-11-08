import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createDiv(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function criarAnimais() {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      const gridAnimal = document.querySelector(target);

      responseJson.forEach((animal) => {
        const div = createDiv(animal);
        gridAnimal.appendChild(div);
      });

      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais(url);
}
