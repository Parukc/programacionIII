class Television{
    _marca;
    _encedido;
    constructor(marca){
        this._marca = marca;
        this._encendido = false;
    }
    encender(){
        this._encendido = true;
        console.log("television encedida");
    }
    apagar(){
        this._encendido = false;
        console.log("television apagada");
    }
}

const miTV = new Television("Samsumg");
miTV.encender();
miTV.apagar();