(()=>{"use strict";new class{constructor(t,e,i){this.imgPrincipal=document.querySelector(t),this.thumbs=document.querySelectorAll(e),this.conteudo=document.querySelectorAll(i),this.ativarConteudo=this.ativarConteudo.bind(this)}ativarConteudo(t,e){const i=t.getAttribute("src"),s=t.getAttribute("alt");this.imgPrincipal.setAttribute("src",i),this.imgPrincipal.setAttribute("alt",s),this.conteudo.forEach((t=>{t.classList.remove("ativo")})),this.conteudo[e].classList.add("ativo",this.conteudo[e].dataset.anime)}addEvent(){this.thumbs.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.ativarConteudo(t,e)}))}))}init(){this.imgPrincipal&&this.thumbs.length&&this.conteudo.length&&this.addEvent()}}('[data-animais="imgPrincipal"]','[data-animais="animaisThumbs"] img','[data-animais="animaisConteudo"] section').init(),new class{constructor(t){this.perguntas=document.querySelectorAll(t),this.ativarResposta=this.ativarResposta.bind(this)}ativarResposta(t){t.currentTarget.nextElementSibling.classList.toggle("ativo"),"true"===t.target.getAttribute("aria-expanded")?t.target.setAttribute("aria-expanded",!1):t.target.setAttribute("aria-expanded",!0)}addEvent(){this.perguntas.forEach((t=>{t.addEventListener("click",this.ativarResposta)}))}init(){this.perguntas.length&&this.addEvent()}}('[data-accordion="faq"] dt').init(),new class{constructor(t){this.linksInternos=document.querySelectorAll(t)}ativarScroll(t){t.preventDefault();const e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth"})}addEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.ativarScroll)}))}init(){this.linksInternos.length&&this.addEvent()}}('[data-menu="menu"] a[href^="#"]').init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.ativarSection=this.ativarSection.bind(this)}ativarSection(){const t=.7*window.innerHeight;this.sections.forEach((e=>{e.getBoundingClientRect().top<t&&e.classList.add("ativo")}))}addEvent(){window.addEventListener("scroll",this.ativarSection)}init(){this.sections.length&&this.addEvent()}}('[data-anime="scroll"]').init(),new class{constructor(t,e,i){this.modalContainer=document.querySelector(t),this.abrir=document.querySelector(e),this.fechar=document.querySelector(i),this.toggleModal=this.toggleModal.bind(this),this.clickFora=this.clickFora.bind(this)}toggleModal(){this.modalContainer.classList.toggle("ativo")}clickFora(t){t.target===this.modalContainer&&this.toggleModal()}addEvent(){this.abrir.addEventListener("click",this.toggleModal),this.fechar.addEventListener("click",this.toggleModal),this.modalContainer.addEventListener("click",this.clickFora)}init(){this.addEvent()}}('[data-modal="modal"]','[data-modal="abrir"]','[data-modal="fechar"]').init(),new class{constructor(t){this.img=document.querySelector(t),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mouseleave",this.onMouseLeave),t.addEventListener("mousemove",this.onMouseMove)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.innerText=i,e.classList.add("tooltip"),document.body.appendChild(e),this.tooltipBox=e}addEvent(){this.img.addEventListener("mouseover",this.onMouseOver)}init(){this.img&&this.addEvent()}}("[data-tooltip]").init()})();