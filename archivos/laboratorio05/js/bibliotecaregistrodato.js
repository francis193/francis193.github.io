//variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var tbRegistro=document.getElementById("tbRegistro");

// function writeUserData(nm, ap, cr) {
//     database.ref('registro/').set({
//         nombre: nm,
//         apellido: ap,
//         correo: cr
//     });
// }
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}

function Mostrar(){
    var i = 0;
    tbody = document.querySelector("#tbRegistro tbody");
    tbody.innerHTML = "";

    var db = database.ref().child("registro");
    db.once("value",function (snapshot) {
        if (snapshot.exists()) {
            snapshot.forEach(function (data){
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;

                var fila = tbody.insertRow(i);

                var titulonombre = fila.insertCell(0);
                var tituloapellido = fila.insertCell(1);
                var titulocorreo = fila.insertCell(2);

                titulonombre.innerHTML = nom;
                tituloapellido.innerHTML = ape;
                titulocorreo.innerHTML = cor;
                tbody.appendChild(fila);
                i++;
            });
        }
    });
}

window.onload = Mostrar;

//creamos un procedimiento para registrar
function Registrar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese su nombre");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingresa su apellido");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else{

        //capturando valores
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        function writeUserData(nom,ape, cor)
        var db=database.ref('registro');

        var registros=db.push();

        registros.set({
            'nombre': nom,
            'apellido': ape,
            'correo': cor,
        });
        alert("Se registro los datos");
        Limpiar();
        Mostrar();
    }
}

var messageListRef = firebase.database().ref('message_list');
var newMessageRef = messageListRef.push();
newMessageRef.set({
  'user_id': 'ada',
  'text': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
});
// We've appended a new message to the message_list location.
var path = newMessageRef.toString();
// path will be something like
// 'https://sample-app.firebaseio.com/message_list/-IKo28nwJLH0Nc5XeFmj'

//llamamos a la funci9n para registrar en el boton
btnRegistrar.addEventListener("click",Registrar);