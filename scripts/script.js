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

document.addEventListener("DOMContentLoaded", function () {
    const imagenCambio = document.getElementById("cambio");
    
    if (!imagenCambio) {
        console.error("No se encontró el elemento con ID 'cambio'");
        return;
    }

    actualizarImagen();

    const btnAvanzar = document.getElementById("avanzar");
    const btnRetroceder = document.getElementById("retroceder");

    if (btnAvanzar && btnRetroceder) {
        btnAvanzar.addEventListener("click", avanzar);
        btnRetroceder.addEventListener("click", retroceder);
    } else {
        console.error("No se encontraron los botones 'avanzar' o 'retroceder'");
    }
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

function retroceder() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarImagen();
}
