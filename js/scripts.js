let boton = document.getElementById('boton');
let contransena = document.getElementById('contrasena');
let contrasena = document.getElementById('contrasena2');
boton.addEventListener('click', compararContrasenias);
let indice = 1;

function compararContrasenias(){
    if(contransena.value == contrasena.value){
        alert('Las contraseñas coinciden');
    }else{
        alert('Las contraseñas no coinciden');
    }
}
