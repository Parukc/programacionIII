//Funciones con parametros por defecto
console.log(" funciones con parametros por defecto");
function saludar(nombre = "Invitado") {
    console.log("Bienvenido : ", nombre);
}

saludar("Pedra Fulano");
saludar();

function multiplicar(num1 = 5, num2 =10) {
    console.log("Mltiplicacion de : ",num1,"*",num2,"=", num1*num2);
}

multiplicar(3,4);
multiplicar();


//Funcion calcular triangulo
function triangulo(num1 = 5, num2 =10) {
    console.log("Base por altura / 2 : ",num1,"*",num2, "/ 2 =", num1*num2/2);
}
triangulo(3,4);
triangulo();

