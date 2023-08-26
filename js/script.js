import TabNav from './modules/tabnav.js';
import Accordion from './modules/accordion.js';
import ScrollSuave from './modules/scrollSuave.js';

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
