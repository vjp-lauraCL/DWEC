let persona = {
    nombre: "Pablo", 
    edad: 23, 
    trabajo: [{
        descripcion: "Programador", 
        duracion: "2004-2008"
    }, {
        descripcion: "Profesor", 
        duracion: "2008-2012"
    }
],
getInfo() {

    let frase = "Mi nombre es "+this.nombre+ "y tengo " + this.edad+ "años";
    for(let i=0; i<this.trabajo.length; i++){
        frase += "Trabajé como " +(i+1) + persona.trabajo[i].descripcion + " desde " + persona.trabajo[i].duracion;
      
    }
    return frase;
}
};
console.log(persona.getInfo());
