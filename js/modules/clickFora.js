export default function cliqueFora(elemento, callback) {
  const userEvents = ['touchstart', 'click'];
  const html = document.documentElement;

  function ativarCliqueFora({ target }) {
    if (!elemento.contains(target)) {
      elemento.setAttribute('aria-expanded', 'false');
      callback();
      userEvents.forEach((userEvent) => {
        html.removeEventListener(userEvent, ativarCliqueFora);
      });
    }
  }

  elemento.setAttribute('aria-expanded', 'true');
  userEvents.forEach((userEvent) => {
    html.addEventListener(userEvent, ativarCliqueFora);
  });
}
