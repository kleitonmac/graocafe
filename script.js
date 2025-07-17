const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");
const botaoFechar = document.querySelector(".fechar-modal");

function mostrarModal() {
    modal.style.left = '50%';
    mascara.style.visibility = 'visible';
    botaoFechar.style.display = 'block'; // mostra o botão de fechar
}

function esconderModal() {
    modal.style.left = '-100%';
    mascara.style.visibility = 'hidden';
    botaoFechar.style.display = 'none'; // esconde o botão de fechar
}
