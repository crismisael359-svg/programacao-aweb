let contador=0;
const numero = document.getElementById("numero");

const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const btnZerar = document.getElementById("zerar");

function atualizarTela() {
    numero.textContent = contador;
}

btnIncrementar.addEventListener("click", function() {
    contador++;
    atualizarTela();
});
btnDecrementar.addEventListener("click", function() {
    contador--;
    atualizarTela();
});
btnZerar.addEventListener("click", function() {
    contador = 0;
    atualizarTela();
});