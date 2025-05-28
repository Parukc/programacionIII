var Libro = /** @class */ (function () {
    function Libro(nombre, paginas) {
        this.dni = "123647445857";
        this.nombre = nombre;
        this.paginas = paginas;
    }
    Libro.prototype.cantidadPaginas = function () {
        console.log("Cantidad de paginas del libro ".concat(this.paginas));
    };
    return Libro;
}());
var myLibro = new Libro("La Dama de Rosa", 350);
console.log(myLibro.nombre);
console.log(myLibro.cantidadPaginas());
