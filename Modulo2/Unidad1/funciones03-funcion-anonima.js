// Funciones Anonima
console.log( " funciones anonimas");
setTimeout(function(){
    console.log("Hola desde funcion setTime");
}, 3000);

let mensaje = function() {
    return "Mensaje desde una función anonima";
}
console.log(mensaje());
