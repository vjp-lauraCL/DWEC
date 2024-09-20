//Objetos en JS
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    toString(){
        return this.nombre + " "  + this.edad;
    }
 
}
let personas = [
    new Persona("pepe", 23),
     new Persona("juan", 34), 
     new Persona("luis", 45)];

     console.log(personas.toString());

     personas.sort();
     console.log(personas.toString());

  