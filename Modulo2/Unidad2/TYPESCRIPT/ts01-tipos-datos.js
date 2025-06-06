var cantidad = 19;
var nombre = "JOSE ZAMBRANO";
var opcion = true;
console.log("cantidad", cantidad);
console.log("Nombre", nombre);
console.log("Opcion", opcion);
var opcional = "comodin any";
opcional = 100;
// Tipos de datos compuestos
var equipos = ["barcelona", "Real Madrid", "Ecuador", "Vino Tino", "La liga"];
console.log("Equipos", equipos);
var edades = [10, 12, 23, 456];
console.log("Edades ", edades);
//Tupla
var persona = ["UTE", 6161616];
console.log("Alumno ", persona);
// Enums
var Estados;
(function (Estados) {
    Estados[Estados["PENDIENTE"] = 0] = "PENDIENTE";
    Estados[Estados["ENVIADO"] = 1] = "ENVIADO";
    Estados[Estados["ENTREGADO"] = 2] = "ENTREGADO";
})(Estados || (Estados = {}));
var miEstado = Estados.ENTREGADO;
console.log(miEstado);
