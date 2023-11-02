import TabNav from './modules/tabnav.js';
import Accordion from './modules/accordion.js';
import ScrollSuave from './modules/scrollSuave.js';
import ScrollAnimacao from './modules/scrollAnimacao.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import Dropdown from './modules/dropdown.js';
import MenuMobile from './modules/menuMobile.js';
import AnimaisNumeros from './modules/animaisNumeros.js';

const tabnav = new TabNav(
  '[data-animais="imgPrincipal"]',
  '[data-animais="animaisThumbs"] img',
  '[data-animais="animaisConteudo"] section',
);
tabnav.init();
const accordion = new Accordion('[data-accordion="faq"] dt');
accordion.init();
const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"]');
scrollSuave.init();
const scrollAnimacao = new ScrollAnimacao('[data-anime="scroll"]');
scrollAnimacao.init();
const modal = new Modal(
  '[data-modal="modal"]',
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
);
modal.init();
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();
const dropdown = new Dropdown('[data-dropdown]');
dropdown.init();
const menuMobile = new MenuMobile(
  '[data-menu="menuBotao"]',
  '[data-menu="menu"]',
);
menuMobile.init();
const animaisNumeros = new AnimaisNumeros(
  '[data-observer]',
  '[data-numeros] span',
);
animaisNumeros.init();
