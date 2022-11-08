import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
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

initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initHorario();

fetchAnimais('./animaisapi.json', '.grid-numeros');

bitcoinFetch('https://blockchain.info/ticker', '.bitcoin');
