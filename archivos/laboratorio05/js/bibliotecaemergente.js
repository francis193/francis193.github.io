//creamos una funcion para cuando cargue el documento abra la ventana
//emergente
function cargar(url,titulo,ancho,alo) {
    //declaramos variables para capturar el ancho y el alto de la pantalla
    var anc=screem.widht;
    var alt=screem.heigt;
    //declaramos variables para ubicar la ventana emergente en el centro
    var x=(anc/2)-(ancho/2);
    var x=(alt/2)-(alto/2);
    alert(x);
    alert(y);
    window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+",top="+y+",scrollbars=NO, menubar=no, toolbar=no, locationbar=no, resizable=no");
}

//llamamos a la funcion cargar
window.onload=cargar("pagina4.html","ventana emergente",400,400);