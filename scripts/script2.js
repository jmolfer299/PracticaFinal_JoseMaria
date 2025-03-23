const imagenes = [
    "images/personajes_Principales/Mark_Evans.png",
    "images/personajes_Principales/Axel.png",
    "images/personajes_Principales/Jude.png",
    "images/personajes_Principales/Xavier.png",
    "images/personajes_Principales/Shawn.png",
    "images/personajes_Principales/Paolo.png",
    "images/personajes_Principales/Jack.png"
];

let indiceActual = 0;
let intervalo;
let pausado = false;

document.addEventListener("DOMContentLoaded", function () {
    const imagenCambio = document.getElementById("cambio");
    
    if (!imagenCambio) {
        console.error("No se encontró el elemento con ID 'cambio'");
        return;
    }

    actualizarImagen();

    const btnPausar = document.getElementById("pausar");
    if (btnPausar) {
        btnPausar.addEventListener("click", pausarContinuar);
    } else {
        console.error("No se encontró el botón 'pausar'");
    }

    iniciarCarrusel();
});

function actualizarImagen() {
    const imagenCambio = document.getElementById("cambio");
    if (imagenCambio) {
        imagenCambio.src = imagenes[indiceActual];
    }
}

function avanzar() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    actualizarImagen();
}

function iniciarCarrusel() {
    intervalo = setInterval(avanzar, 500); 
}

function pausarContinuar() {
    const btnPausar = document.getElementById("pausar");
    if (pausado) {
        iniciarCarrusel();
        btnPausar.textContent = "Pausar";
    } else {
        clearInterval(intervalo);
        btnPausar.textContent = "Continuar";
    }
    pausado = !pausado;
}