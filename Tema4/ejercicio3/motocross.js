class Motocross extends Ciclomotor{
    constructor(marca, aceleracion, desaceleracion){
        super(marca, aceleracion, desaceleracion);
        super.velocidadMaxima = 90;
        this.marcha = 0;
    }
  arrancar(){
    console.log('Levanta la pata de cabra')
    super.arrancar();
    }
    acelerar(){
        super.acelerar();
        this.setMarcha();
    }
    frenar(){
        super.frenar();
        this.setMarcha();
    }
  setMarcha(){
    switch(this.velocidadActual){
        case 0 == this.velocidadActual:{
            this.marcha = 0;
            break;
        }
        case this.velocidadActual < 10:{
            this.marcha = 1;
            break;
        }
        case this.velocidadActual < 30:{
            this.marcha = 2;
            break;
        }
        case this.velocidadActual < this.velocidadMaxima:{
            this.marcha = 3;
            break;
        }
        default:{
            this.marcha = 0;
            break;
        }
    }
  }
    mostrarInfo(){
        for(const [key, value] of Object.entries(this)){
            console.log(`${key}: ${value}`);
    }

}
}