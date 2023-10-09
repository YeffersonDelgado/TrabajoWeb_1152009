function agregarNumero(numero) {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += numero;
}

function borrarPantalla() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}

function limitarLongitud(input) {
    const valor = input.value;
    if (valor.length > 4) {
        input.value = valor.slice(0, 4); // Limitar a 4 dígitos
    }
}


