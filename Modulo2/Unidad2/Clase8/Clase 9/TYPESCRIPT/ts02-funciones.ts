function saludar(nombre: string): string{
    return `Hola, ${nombre}`;
}

console.log(saludar("Betty Marmol"));

//Parametros opcionales
function obtenerApellido(apellido?: string): string{
    return `Mi apellido, ${apellido ?? "invitado"}`;
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido());

//Parametros opcionales
function obtenerEdad(edad: number=18): string{
    return `Mi edad, ${edad}`;
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());

//Funciones tipos flecha
const sumar=(a: number, b: number): number =>{
    return a+b;
}
console.log("la suma es:", sumar(5,4));

function mostrarInformacion(informacion: string): void{
    console.log(informacion);
}
mostrarInformacion("Suceso en Norte de Quito");

//Tipar funciones como variables
let operacion: (x: number, y: number)=>number;
operacion = function(a,b){
    return a+b;
}
console.log("resltado suma ", operacion(15,30));

//Función que reciba un arreglo string y salude a cada persona

