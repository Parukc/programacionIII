console.log("CONDICIONALES");
console.log("if Simple");
temperatura = 35;
if (temperatura > 30){
    console.log("Hace calor");
}
console.log("if else");
usuariologueado = true;
if (usuariologueado){
    console.log("Bienvenido de nuevo");
} else {
    console.log("Por favor, incia sesion");
}
console.log("if else if else");
nota = 9;
if (nota>=9){
    console.log("Excelente");
} else if (nota>=6){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
console.log("if aninado ");
edad = 18
tienelicencia = true;
if (edad>=18){
    if (tienelicencia){
        console.log("Puede conducir")
    } else {
    console.log("Necesita licencia par conducir")
    }
} else {
    console.log("Es menor de edad");
}

console.log("if con operadores logicos ");
let esEstudiante = true;
let tieneDescuento = true;
if (esEstudiante && tieneDescuento){
    console.log("Aplica a tarifa reducida");
}
esAdmin = true;
esEditor = false;
if (esAdmin||esEditor){
    console.log("Puede editar contenido");
}