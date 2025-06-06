var empleado = {
    nombre: "Bob",
    apellido: "Marley"
};
console.log("Empleado: ".concat(empleado.nombre, " ").concat(empleado.apellido));
function login(credencial) {
    console.log("Bienvenido", credencial.usuario);
}
var miUsuario = {
    clave: "123",
    usuario: "Jesus",
};
login(miUsuario);
function calcularArea(figura) {
    if (figura.tipo === 'cuadrado') {
        return figura.base * figura.base; // Área del cuadrado: lado^2
    }
    else if (figura.tipo === 'rectángulo') {
        return figura.base * figura.altura; // Área del rectángulo: base * altura
    }
    return 0;
}
var cuadrado = {
    base: 5,
    altura: 5, // En un cuadrado, base y altura son iguales
    tipo: 'cuadrado',
};
var rectangulo = {
    base: 4,
    altura: 6,
    tipo: 'rectángulo',
};
console.log("Área del cuadrado:", calcularArea(cuadrado));
console.log("Área del rectángulo:", calcularArea(rectangulo));
