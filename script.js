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
