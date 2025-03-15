// Seleccionar elementos
const basuras = document.querySelectorAll('.basura');
const contenedores = document.querySelectorAll('.contenedor');
const puntosDisplay = document.querySelector('#puntos');
let puntos = 0;

// Habilitar arrastrar los residuos
for (let i = 0; i < basuras.length; i++) {
    basuras[i].addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('tipo', basuras[i].getAttribute('data-tipo'));
        e.dataTransfer.setData('id', basuras[i].id);
    });
}

// Permitir soltar en los contenedores
for (let i = 0; i < contenedores.length; i++) {
    contenedores[i].addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    contenedores[i].addEventListener('drop', function (e) {
        e.preventDefault();
        let tipoBasura = e.dataTransfer.getData('tipo');
        let tipoContenedor = contenedores[i].getAttribute('data-tipo');
        let basuraId = e.dataTransfer.getData('id');
        let basuraElemento = document.querySelector(`#${basuraId}`);

        if (tipoBasura === tipoContenedor) {
            // Correcto: La basura desaparece
            puntos += 10;
            basuraElemento.style.display = 'none'; // Ocultar basura
            alert('¡Correcto! Reciclaste bien.');
        } else {
            //  Incorrecto: No desaparece la basura
            alert('¡Error! Ese no es el contenedor correcto.');
        }

        // Actualizar puntos
        puntosDisplay.textContent = `Puntos: ${puntos}`;
    });
}

// Reiniciar el juego
document.querySelector('#reiniciar').addEventListener('click', function () {
    location.reload();
});
