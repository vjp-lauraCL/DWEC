let monumento = {

    "uri": {
        "type": "uri",
        "value": "http://opendata.caceres.es/recurso/turismo/monumentos/Monumento/1-palacio-de-la-isla"
      },
      "geo_long": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#double",
        "value": "-6.37285"
      },
      "geo_lat": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#double",
        "value": "39.4752"
      },
      "clase": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#string",
        "value": "PALACIO "
      },
      "rdfs_label": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#string",
        "value": "de La Isla"
      },
      "tieneEnlaceSIG": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#string",
        "value": "http://sig.caceres.es/serweb/fichasig/fichatoponimia.php?mslink=1176 "
      },
   pintarInfo(){
    let infoCatedral = "El nombre del monumento es "+monumento.rdfs_label.value+ "el tipo de monumento es " +monumento.clase.value+ "la longitud es" +monumento.geo_long.value+ "la latitud es "+monumento.geo_lat.value+ "y el enlace es " +monumento.uri.value;
 
    return infoCatedral;
      }
      
} 

console.log(monumento.pintarInfo());

console.log("El nombre del monumentos es "+monumento.rdfs_label.value);
console.log("El tipo de monumento es: "+monumento.clase.value);
