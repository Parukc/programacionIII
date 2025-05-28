const persona ={
    nombre: "Pedro",
    apellido: "Perez",
    edad: 20,
    direccion: "av amazonas",
    telefono: "773737374"
}
console.log( "nombre", persona["nombre"]);
console.log( "Apellido", persona["apellido"]);

console.log("Ciclo For-in");

for (const clave in persona){
    console.log(clave, " : ", persona[clave])
}

const producto = {
    nombre: "Laptop",
    precio: 1000,
    descripcion: "i7 13va generacion 500gb SSD 32GBRAM"
}
for (const clave in producto){
    console.log(clave," : ", producto[clave])
}