// Seleccionar elementos
const basuras = document.querySelectorAll('.basura');
const contenedores = document.querySelectorAll('.contenedor');
const puntosDisplay = document.querySelector('#puntos');
let puntos = 0;
let basuraSeleccionada = null;
const sonido = new Audio("sonidos/wingame.mp3");
const sonido1 = new Audio ("sonidos/pop.mp3");
const sonido2 = new Audio ("sonidos/error.mp3")

// Hacer clic en la basura para seleccionarla
for (let i = 0; i < basuras.length; i++) {
    basuras[i].addEventListener('click', function () {
        basuraSeleccionada = basuras[i];
    });
}

// Hacer clic en el contenedor para colocar la basura seleccionada
for (let i = 0; i < contenedores.length; i++) {
    contenedores[i].addEventListener('click', function () {
        if (basuraSeleccionada) {
            let tipoBasura = basuraSeleccionada.getAttribute('data-tipo');
            let tipoContenedor = contenedores[i].getAttribute('data-tipo');

            if (tipoBasura === tipoContenedor) {
                // Correcto: La basura desaparece
                
                basuraSeleccionada.style.display = 'none'; // Ocultar basura
                sonido1.play();
                alert('¡Correcto! Reciclaste bien.');
                sumarPuntos(10)
            } else {
                // Incorrecto: No desaparece la basura
                sonido2.play()
                alert('¡Error! Ese no es el contenedor correcto.');
            }

            // Actualizar puntos
            puntosDisplay.textContent = `Puntos: ${puntos}`;
            // Resetear la selección
            basuraSeleccionada = null;
        }
    });
}

function sumarPuntos(cantidad) {
    puntos += cantidad; // Sumar la cantidad de puntos

    if (puntos >= 120) {
        alert("¡Felicidades! Has alcanzado 120 puntos 🎉");
        sonido.play(); // Reproducir el sonido
    }
}


// Reiniciar el juego
document.querySelector('#reiniciar').addEventListener('click', function () {
    location.reload();
});
