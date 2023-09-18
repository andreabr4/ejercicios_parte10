inputUsuario = prompt("Introduce un número: ");
numeroUsuario = parseInt(inputUsuario);
document.getElementById("num").innerHTML = numeroUsuario;

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    sumaNumeros(numeroUsuario);
});

function sumaNumeros(numeroSumado) {
    valorActual = document.getElementById("num").innerHTML;
    numeroActual = parseInt(valorActual);
    numeroActual = numeroActual + numeroSumado;
    document.getElementById("num").innerHTML = numeroActual;
}
