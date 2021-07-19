//declaramos variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimiento pra limpiar
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

function Registrar(){
    if (txtCor.value == "" || txtCor.value == null){
        alert("Ingresa el correo");
        txtCor.focus();
    } else if (txtCon.value == "" || txtCon.value == null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    } else {
        //capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;

    //llamando al codigo de Firebase para registrar
    firebase.auth.createUserWithEmailAndPassword(cor, con)
    .then((userCredential) => {
    alert("se registro el usuario");
    Limpiar();
    })
    .catch((error) => {
    alert("no se registro el usuario");
    Limpiar();
    });    
    }
}

//asignamos el procedimiento al boton
btnRegistrar.addEventListener("click",Registrar);