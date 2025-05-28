class Animal{
    _nombre;
    constructor(nombre){
        this._nombre = nombre;
    }
    hacerSonido(){
        console.log("Sonido Genérico");
    }
}

class Perro extends Animal {
    caminar(){
        console.log("Perro caminando");
    }
}
const miPerro = new Perro("Firulais");
miPerro.hacerSonido();
miPerro.caminar();
const gato = new Animal("Hello Kitty");
gato.hacerSonido();