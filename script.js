function initTabNav() {
  const imagemPrincipal = document.querySelector('.animais-imagens-principal img');
  const imagensThumb = document.querySelectorAll('.animais-imagens-thumb img');
  const animaisDescricao = document.querySelectorAll('.animais-descricao section')
  
  if (imagemPrincipal && imagensThumb.length && animaisDescricao.length) {
    function mostrarImagem(img, index) {
      //trocar imagem
      const src = img.getAttribute('src')
      const classNomePrincipal = imagemPrincipal.attributes[0].nodeValue
      const novaClass = img.attributes[0].nodeValue
      imagemPrincipal.setAttribute('src', src)
      imagemPrincipal.classList.replace(classNomePrincipal, novaClass)
    
      //trocar descrição
      animaisDescricao.forEach(item => {
        item.classList.remove('ativo')
      })
    
      animaisDescricao[index].classList.add('ativo')
    }
    
    imagensThumb.forEach((img, index) => {
      img.addEventListener('click', () => {
        mostrarImagem(img, index)
      });
    })
  }
}

initTabNav();


function initAccordion() {
  const dt = document.querySelectorAll('.js-faq dt');
  
  function mostrarPergunta() {
    this.nextElementSibling.classList.toggle('ativo')
    this.classList.toggle('ativo')
  }
  
  dt.forEach(perguntas => {
    perguntas.addEventListener('click', mostrarPergunta)
  })
}

initAccordion();


function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  
  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;
    
    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

initAnimacaoScroll();