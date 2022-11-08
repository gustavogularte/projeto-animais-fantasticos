import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import initHorario from './modules/horario.js';
import fetchAnimais from './modules/animais-fetch.js';
import bitcoinFetch from './modules/bitcoin-fetch.js';

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollSuave.init();

const accordian = new Accordion('.js-faq dt');
accordian.init();

const tabnav = new TabNav();
tabnav.init();

const modal = new Modal();
modal.init();

const tooltip = new Tooltip();
tooltip.init();

const scrollAnima = new ScrollAnima('.js-scroll');
scrollAnima.init();

const dropdown = new DropdownMenu('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initHorario();

fetchAnimais('./animaisapi.json', '.grid-numeros');

bitcoinFetch('https://blockchain.info/ticker', '.bitcoin');
