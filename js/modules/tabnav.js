export default function initTabNav() {
  const imagemPrincipal = document.querySelector('.animais-imagens-principal img');
  const imagensThumb = document.querySelectorAll('.animais-imagens-thumb img');
  const animaisDescricao = document.querySelectorAll('.animais-descricao section');
  
  if (imagemPrincipal && imagensThumb.length && animaisDescricao.length) {
    function mostrarImagem(img, index) {
      //trocar imagem
      const src = img.getAttribute('src');
      const classNomePrincipal = imagemPrincipal.attributes[0].nodeValue;
      const novaClass = img.attributes[0].nodeValue;
      imagemPrincipal.setAttribute('src', src);
      imagemPrincipal.classList.replace(classNomePrincipal, novaClass);
    
      //trocar descrição
      animaisDescricao.forEach(item => {
        item.classList.remove('ativo');
      });
      const direcao = animaisDescricao[index].dataset.anime;
      animaisDescricao[index].classList.add('ativo', direcao);
    }
    
    imagensThumb.forEach((img, index) => {
      img.addEventListener('click', () => {
        mostrarImagem(img, index);
      });
    });
  }
}
