var obj2 ={
    nombre : "Paco",
    edad : 32,
    WebGLActiveInfo(){
        return "Mi nombre es "+this.nombre+ " y tengo " +this.edad
    }
   
}
console.log(obj2.getInfo()); //pintamos la info
console.log(obj2.nombre);//pintamos el nombre de Pedro
console.log(obj2["nombre"]);//pintamos el nombre utilizando la notacion asociativa

let prop2 = "nombre";
console.log(obj2[prop2]);