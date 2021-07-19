var cboDistrito = document.getElementById("cboDistrito");

//creamos un procedimiento una variable para el filas
function CargarDistrito(){
    var i = 0;

    var db = database.ref().child("distrito");
    db.once("value",function (snapshot) {
        if (snapshot.exists()){
            snapshot.forEach(function (data){
                var cod = data.key;
                var nom = data.val().nombre;

                var options = document.createElement("option");

                options.text = nom;
                options.value = cod;

                cboDistrito.add(options);
                i++;
            });
        }
    });
}
window.onload = CargarDistrito;