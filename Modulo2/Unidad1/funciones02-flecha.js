// Funciones Flecha

const saludar = ()=> {
    console.log("Hola desde arrow function");
}
saludar();
saludar();
saludar();
saludar();
const cuadrado1 = (num)=> {
    console.log("cuadrado de", 6, "igual a", num*num);
}
cuadrado(6);
// Retorno  directo
const cuadrado = x => x * x;
console.log("5x5",cuadrado(5));

//Input y Alert
const cuadrado1In = ()=> {
    let num = prompt("Ingres numero");
    let cuadrado = num*num;
    alert("El cuadrado es "+cuadrado);
}
cuadrado1In();