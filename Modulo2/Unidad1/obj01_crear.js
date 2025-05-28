//Manipulación de Objeto
let alumno = {
    nombre: "Juan",
    apellido: "Ampies",
    direccion: "Av. Amazonas",
    telefono: 33389433434
}

console.log(alumno);
// Acceder a propiedades
console.log("apellido del alumno: ",alumno.apellido);
console.log("nombre del alumno: ",alumno["nombre"]);
// Modificar propiedades
alumno.apellido = "Lopez";
alumno["direccion"] = "Av. Bolivar";

console.log(alumno);
//Incluir nueva propiedad
alumno.promedio = 9;

console.log(alumno);

delete alumno.promedio
console.log(alumno);

alumnoClonado = {...alumno}
alumnoClonado.nombre = "Antonio";
alumnoClonado.apellido = "Apellido";
console.log(alumnoClonado);

//Multiplicar Precio Unitario * Cantidad y sumarle IVA y asignar el valor
// y asignar el valor subtotal
item = {
    precioUnitario: 23,
    cantidad: 3,
    iva: 3.4,
    nombre: "Laptop",
    subtotal: 0
}

item.subtotal=(item.precioUnitario*item.cantidad)+(item.precioUnitario*0.15);
console.log("El subtotal es:"+item.subtotal)

//listar las claves o propiedades
console.log(Object.keys(item));
//listar los valores
console.log(Object.values(item));
//Imprimir item
console.log("Imprimir item")
{
    console.log(ClipboardEvent," = ", item[clave]);
}

//Metodos o funciones en objetos


usuarios = {
    nombre: "Luis",
    saludar: function(){
        return "Hola soy " + this.nombre;
    }
}

console.log(usuarios.saludar());

// objetos aninados

categoria = {
    nombre: "Electronica",
    prodyctos: ["Laptop", "Monitor", "Teclado", {cantidad : 12, marca: "Sony"}],
    descripcion: {
        capacidad: "16hz",
        tamaño: "12 pulgadas" 
    }
}
console.log(categoria);

