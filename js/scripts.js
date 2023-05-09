let formulario = document.getElementById('formularioAltaCliente');
let contrasena = document.getElementById('contrasena');
let contrasena2 = document.getElementById('contrasena2');
formulario.addEventListener('submit', compararContrasenias);
let indice = 1;

function compararContrasenias(event) {
    if (contrasena.value !== contrasena2.value) {
        event.preventDefault();
        let mostrarmenaje = document.getElementById('mensajeContraseña');
        mostrarmenaje.setAttribute('style', 'display: block');
    }
}
