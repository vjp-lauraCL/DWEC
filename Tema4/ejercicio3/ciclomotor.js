class Ciclomotor{
    constructor( marca, aceleracion, desaceleracion){
        this.numRuedas = 2;
        this.velocidadMaxima = 120;
        this.velocidadActual=0;
        this.marca = marca;
        this.aceleracion = aceleracion;
        this.desaceleracion = desaceleracion;
        this.encendida = false;
    }
    acelerar(){
        if(this.encendida){
            this.velocidadActual += this.aceleracion;
            if(this.velocidadActual >= this.velocidadAMaxima){
                this.velocidadActual = this.velocidadMaxima;
            }
        }
    }
    //arrancar la moto
    arrancar(){
        this.encendida = true;
        console.log('Se mete y gira la llave, la moto arranca')
    }
    frenar(){
        if(this.encendida){
            this.velocidadActual += this.aceleracion;
            if(this.velocidadActual <= 0){
                this.velocidadActual = 0;
            }
        }
    }
    mostrarInfo(){
       for(const [key, value] of Object.entries(this)){
           console.log(`${key}: ${value}`);
            
        };
    }
}