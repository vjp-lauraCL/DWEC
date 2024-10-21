
function pintarInfoMonumento(monumento){
    let cadenaDeVuelta ="";
    cadenaDeVuelta += "Nombre: " + monumento.rdfs_label.value + " \n";
    cadenaDeVuelta += "Tipo monumento: " +monumento.om_tipoMonumento.value + " \n";
    cadenaDeVuelta += "Latitud: " + monumento.geo_lat.value + " \n";
    cadenaDeVuelta += "Longitud: " + monumento.geo_long.value + " \n";
    cadenaDeVuelta += "Enlace: " + monumento.uri.value ;

    return cadenaDeVuelta;
}

let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET", "https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/monumentos.json");
peticionAjax.send();


function procesarPeticion(event) {
    if(this.readyState == 4 && this.status == 200){
        let objetoResultado = JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }
}
function procesarResultado(objetoResultado){
    for(let monumento of objetoResultado.results.bindings){
        console.log(pintarInfoMonumento(monumento));
    }
}
