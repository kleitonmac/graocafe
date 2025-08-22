const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");
const caixaPrincipal = document.querySelector(".caixa-principal");

function mostrarModal() {
  modal.style.left = '50%';
  mascara.style.visibility = 'visible';

  // Esconde a caixa principal
  caixaPrincipal.style.display = 'fixed';
  caixaPrincipal.style.visibility = 'hidden';

}

function esconderModal() {
  modal.style.left = '-100%';
  mascara.style.visibility = 'hidden';

  // Mostra novamente a caixa principal
  caixaPrincipal.style.display = 'fixed';
  caixaPrincipal.style.visibility = 'visible';
}

// Função para navegar pelas avaliações
function scrollAvaliacoes(direction) {
  const container = document.querySelector('.avaliacoes-container');
  const scrollAmount = 400; // Largura de aproximadamente 1 card + gap
  
  if (direction === 'left') {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}
