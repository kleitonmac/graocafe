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


function scrollAvaliacoes(direction) {
  const container = document.querySelector('.avaliacoes-container');
  const card = container.querySelector('.avaliacao-card');

  if (!container || !card) return;

  const cardWidth = card.offsetWidth + 16; // largura + gap (ajuste se necessário)
  const scrollAmount = cardWidth * 2; // rola 2 cards por vez

  if (direction === 'left') {
    if (container.scrollLeft === 0) {
      // Se está no início e clicou "esquerda", vai para o final
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  } else {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
      // Se chegou no fim, volta para o início
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}

// Auto-play a cada 4s (rolando 2 cards)
setInterval(() => {
  scrollAvaliacoes('right');
}, 4000);
