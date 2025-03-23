document.addEventListener("DOMContentLoaded", function () {
    const btnModoOscuro = document.getElementById("modoOscuro");
    if (btnModoOscuro) {
        btnModoOscuro.addEventListener("click", modoOscuro);
    } else {
        console.error("No se encontró el botón 'modoOscuro'");
    }

    aplicarPreferenciaModoOscuro();
});

function modoOscuro() {
    document.body.classList.toggle("oscuro");
    const esModoOscuro = document.body.classList.contains("oscuro");
    document.cookie = `modoOscuro=${esModoOscuro}; path=/`; 
    const btnModoOscuro = document.getElementById("modoOscuro");
    btnModoOscuro.textContent = esModoOscuro ? "Modo claro" : "Modo oscuro";
}

function aplicarPreferenciaModoOscuro() {
    const modoOscuro = getCookie("modoOscuro");
    if (modoOscuro == "true") {
        document.body.classList.add("oscuro");
        const btnModoOscuro = document.getElementById("modoOscuro");
        btnModoOscuro.textContent = "Modo claro";
    }
}

function getCookie(nombre) {
    const valor = `; ${document.cookie}`;
    const partes = valor.split(`; ${nombre}=`);
    if (partes.length == 2) return partes.pop().split(';').shift();
    return null;
}