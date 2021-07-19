//declarando variables para los controles
var txtCor=document.getElementById("txtCor")
var txtCor=document.getElementById("txtCon")
var txtCor=document.getElementById("txtIngresar")

//creamos un procedimeinto para ingresar
function ingreasar() {
        if (txtCor.Value=="" || txtCor.value==null){
                alert("ingrese su correo");
                txtCor.focus();
        }else if(txtCon.value=="" || txtCon.value==null){
                alert("ingrese su contraseña");
                txtCon.focus();
        }else{
                //capturando valores
                var cor=txtCor.value;
                var con=txtCon.value;
                //llamamos ala funcion de firebase para validar el usuario 
                auth.signInWithEmailAndPassword(cor, con)
                .then((userCredential) => {
                        alert("bienvenidos al sistema")
                        //nos dirigimos ala pagina 11
                        window.location="pagina11.hmtl";

                })
                .catch((error) => {
                        alert("Usuario o clave no valida")
                        //var errorcode = error .code;
                        //var errorMensaje = error .menssage
                })
        }
}
//llamamos al procedimiento para ingresar 
btnIngresar.addEventListenner("click", ingresar);