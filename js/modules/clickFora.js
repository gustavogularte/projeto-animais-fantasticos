export default function clickFora(elemento, callback) {
  const html = document.documentElement;

  function ativarClickFora({ target }) {
    if (!elemento.contains(target)) {
      callback();
      html.removeEventListener('click', ativarClickFora);
    }
  }

  setTimeout(() => html.addEventListener('click', ativarClickFora));
}
