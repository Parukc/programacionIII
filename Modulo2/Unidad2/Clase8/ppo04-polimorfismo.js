class Figura {
    calcularArea(){
        return 0;
    }
}
class Circulo extends Figura{
    _radio;
    constructor(radio){
        super();
        this._radio=radio;
    }
    calcularArea(){
        return Math.PI * this._radio**2;
    } 
}
class Rectangulo extends Figura{
    _ancho;
    _alto;
    constructor(ancho, alto){
        super();
        this._ancho=ancho;
        this._alto=alto;
    }
    calcularArea(){
        return this._ancho * this._alto;
    } 
}
class Cuadrado extends Figura{
    _lado1;
    _lado2;
    _lado3;
    _lado4;
    constructor(lado1, lado2, lado3, lado4){
        super();
        this._lado1=lado1;
        this._lado2=lado2;
        this._lado3=lado3;
        this._lado4=lado4;
    }
    calcularArea(){
        return this._lado1 * this._lado2 * this._lado3 * this._lado4;
    } 
}
const miCirculo=new Circulo(5);
console.log(miCirculo.calcularArea());
const miRectangulo = new Rectangulo(4,5)
console.log(miRectangulo.calcularArea());
const miCuadrado = new Cuadrado(2,2,2,2);
console.log(miCuadrado.calcularArea());