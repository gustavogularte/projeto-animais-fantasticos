import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function ativarMenu() {
    menuList.classList.toggle('ativo');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('ativo');
    });
  }

  eventos.forEach((item) => {
    menuButton.addEventListener(item, ativarMenu);
  });
}
