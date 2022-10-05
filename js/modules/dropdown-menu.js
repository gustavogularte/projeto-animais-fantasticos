import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(evento => {
      menu.addEventListener(evento, handleClick);
    })
  })

  function handleClick(e) {
    e.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo')
    })
  };
};
