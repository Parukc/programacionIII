// HERENCIA
class Vehiculo {
    public marca: string;
    constructor(marca: string){
        this.marca = marca;
    }
    moverse(): void{
        console.log(`La marca ${this.marca} está en movimiento`);
    }
}

class Motod extends Vehiculo {
     hacerCaballito(): void{
        console.log(`La marca ${this.marca} hace caballito`);
     }
}

const miVehiculo = new Vehiculo("Toyota");
miVehiculo.moverse();
const miMoto = new Motod("Yamaha");
miMoto.moverse();
miMoto.hacerCaballito();