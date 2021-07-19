//creamos un vector para el producto
var producto=[];
//creamos un procedimiento para registrar
//catgoria se va a registrar de un combobox -> select
//catgoria: entretenimiento, tecnologia, linea blanca
function Registrar(nomproducto,preproducto,catproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        categoria:catproducto,
        cantidad:canproducto
    };
    registro.push(NuevoProducto);
}
//creamos una funcion para obtener los valores del registro
function Mostrar(){
    return producto;
}