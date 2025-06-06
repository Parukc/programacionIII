interface Persona{
    nombre: string,
    apellido: string,
}

let empleado: Persona = {
    nombre: "Bob",
    apellido: "Marley"
}
console.log(`Empleado: ${empleado.nombre} ${empleado.apellido}`);

interface Credenciales{
    clave: string,
    usuario: string,
}
function login(credencial: Credenciales): void{
    console.log("Bienvenido", credencial.usuario);
}
let miUsuario: Credenciales = {
    clave: "123",
    usuario: "Jesus",
}
login(miUsuario);

//Hacer uan interface que tenga base, altura y tipo de figura(cyadrado y rectancgulo) se le pase a una finción segun el tipo que se le pase, calcule el area
interface Figura {
    base: number;
    altura: number;
    tipo: 'cuadrado' | 'rectángulo';
}

function calcularArea(figura: Figura): number {
    if (figura.tipo === 'cuadrado') {
        return figura.base * figura.base; 
    } else if (figura.tipo === 'rectángulo') {
        return figura.base * figura.altura; 
    }
    return 0;
}

let cuadrado: Figura = {
    base: 5,
    altura: 5,
    tipo: 'cuadrado',
};

let rectangulo: Figura = {
    base: 4,
    altura: 6,
    tipo: 'rectángulo',
};

console.log("Área del cuadrado:", calcularArea(cuadrado));
console.log("Área del rectángulo:", calcularArea(rectangulo));