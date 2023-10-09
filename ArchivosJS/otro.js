function agregarNumero(numero) {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += numero;
}

function agregarString() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += "#";
}

function agregarPunto() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += ".";
}

function borrarPantalla() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}

document.getElementById("btn-10").addEventListener("click", function() {
    window.location.href = "../index.html"; 
});

document.getElementById("btn-11").addEventListener("click", function() {
    window.location.href = "resultado_retiro.html"; 
});

document.getElementById("boton-1").addEventListener("click", function() {
    window.location.href = "resultado_cambio.html"; 
});








