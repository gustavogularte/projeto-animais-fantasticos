(()=>{"use strict";new class{constructor(t,i,e){this.imgPrincipal=document.querySelector(t),this.thumbs=document.querySelectorAll(i),this.conteudo=document.querySelectorAll(e),this.ativarConteudo=this.ativarConteudo.bind(this)}ativarConteudo(t,i){const e=t.getAttribute("src"),a=t.getAttribute("alt");this.imgPrincipal.setAttribute("src",e),this.imgPrincipal.setAttribute("alt",a),this.conteudo.forEach((t=>{t.classList.remove("ativo")})),this.conteudo[i].classList.add("ativo",this.conteudo[i].dataset.anime)}addEvent(){this.thumbs.forEach(((t,i)=>{t.addEventListener("click",(()=>{this.ativarConteudo(t,i)}))}))}init(){this.imgPrincipal&&this.thumbs.length&&this.conteudo.length&&this.addEvent()}}('[data-animais="imgPrincipal"]','[data-animais="animaisThumbs"] img','[data-animais="animaisConteudo"] section').init(),new class{constructor(t){this.perguntas=document.querySelectorAll(t),this.ativarResposta=this.ativarResposta.bind(this)}ativarResposta(t){t.currentTarget.nextElementSibling.classList.toggle("ativo"),"true"===t.target.getAttribute("aria-expanded")?t.target.setAttribute("aria-expanded",!1):t.target.setAttribute("aria-expanded",!0)}addEvent(){this.perguntas.forEach((t=>{t.addEventListener("click",this.ativarResposta)}))}init(){this.perguntas.length&&this.addEvent()}}('[data-accordion="faq"] dt').init(),new class{constructor(t){this.linksInternos=document.querySelectorAll(t)}ativarScroll(t){t.preventDefault();const i=t.target.getAttribute("href");document.querySelector(i).scrollIntoView({behavior:"smooth"})}addEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.ativarScroll)}))}init(){this.linksInternos.length&&this.addEvent()}}('[data-menu="menu"] a[href^="#"]').init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.ativarSection=this.ativarSection.bind(this)}ativarSection(){const t=.7*window.innerHeight;this.sections.forEach((i=>{i.getBoundingClientRect().top<t&&i.classList.add("ativo")}))}addEvent(){window.addEventListener("scroll",this.ativarSection)}init(){this.sections.length&&this.addEvent()}}('[data-anime="scroll"]').init()})();