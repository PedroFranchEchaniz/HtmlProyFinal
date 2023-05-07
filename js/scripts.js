let boton = document.getElementById('boton');
let contransena = document.getElementById('contrasena');
let contrasena = document.getElementById('contrasena2');
boton.addEventListener('click', compararContrasenias);
let indice = 1;

function compararContrasenias(){
    if(contransena.value == contrasena.value){
        
    }else{
        let mostrarmenaje = document.getElementById('mensajeContraseña');
        mostrarmenaje.setAttribute('style', 'display: block');
        
    }
}
