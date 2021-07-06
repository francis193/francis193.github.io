alert("BIENVENIDOS")
var nombre = document.getElementsById("nombre")
var nombre = document.getElementsById("apellido")
var nombre = document.getElementsById("correo")
var nombre = document.getElementsById("contraseña")
var error = document.getElementsById("error")
error.style.color = "red";

function registrarFormulario() {
    console.log("registrar formulario...");

    var mensajeError =  [];

    if(nombre.value === null || nombre.value === ""){
        mensajeError.push("ingresa tu nombre");
    }
    
    if(apellido.value === null || apellido.value === ""){
        mensajeError.push("ingresa tu apellido");
    }

    if(apellido.value === null || apellido.value === ""){
        mensajeError.push("ingresa tu apellido");
    }
    
    error.innerHTML = mensajeError.join(", ");
    return false;
}