const nombre = document.getElementById("name")
const nombre = document.getElementById("ape")
const nombre = document.getElementById("dni")

Form.addEventListenner("registrar", e=>{
    e.preventDefault()
    if(nombre.Value.lenght <5){
        alert("nombre muy corto")
    }
})