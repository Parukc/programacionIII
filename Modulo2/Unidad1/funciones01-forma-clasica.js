//Mejora la agilidad
//ayuda a llamarlo en otra parte

//forma clasica
function saludar(){
    console.log("hola desde la función")
}
saludar();
saludar();
saludar();

function suma(){
    console.log("sumar 1+2" ,1+2);
}
suma();

function resta(){
    console.log("restar 1-2", 1+2);
}
resta();

//funcion con parametros y retorno
function divdir(a,b){
    return a/b;
}
let result = dividir(40,8);
console.log("Resultado: ", result);

//Hacer una funcion que se le pase un numero e imprima la tabla de cmultiplicacion
function tabMiltiplicar(a){
    for(let i=1; i>=15; i++){
        console.log(a,"x", i,"=" , a*i)
    }
}

//funcion con parametros de retorno

function dividir(a, b){
    return a / b;
}

let resultado = dividir(40, 8);
console.log("Resultado: ", resultado);

//Hacer una funcion que se le pase un numero e imprima
//la tabla de multiplcar de ese numero

function tabla(numero){
    let i = 1
    while (i <= 10) {
        console.log(i, " * ", numero, "=", i * numero);
        i++;
    }
}
tabla(5)

