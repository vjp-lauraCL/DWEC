class Scooter extends Ciclomotor{
    constructor(marca){
        super(marca, 25, 15);
    }
arrancar(){
   this.encendida = true;
   console.log('Se acerca la llave, se pulsa el botón y la scooter arranca');
}
acelerar(){
    super.acelerar();
}
frenar(){
    super.frenar();
}
mostrarInfo(){
    for(const [key, value] of Object.entries(this)){
        console.log(`${key}: ${value}`);
    }
}
}