let obj = new Object();
obj .nombre = "Pedro"; //añadimos la propiedad nombre que no existe
obj ["edad"] = 41;//añadimos la edad que no existia (notación array)
obj.getInfo = function(){ //añadimos un método al objeto que pinta su info
    return "Mi nombre es "+this.nombre+ " y tengo " + this.edad
};

//Probamos el objeto que acabamos de crear
console.log(obj.getInfo()); //pintamos la info
console.log(obj.nombre);//pintamos el nombre de Pedro
console.log(obj["nombre"]);//pintamos el nombre utilizando la notacion asociativa

let prop = "nombre";
console.log(obj[prop]);