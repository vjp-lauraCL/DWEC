let boton = document.getElementById('boton');
let numero = 1;

function pintarRestaurante(restaurante) {
    let nombre = restaurante.rdfs_label.value;
    let web = restaurante.uri.value;
    let direccion = restaurante.schema_address_streetAddress.value;
    let aforo = restaurante.om_capacidadPersonas.value;
    let fila = "<td>" + numero + "<td>" + nombre + "</td><td>" + web + "</td><td>" + direccion + "</td><td>" + aforo + "</td>";
    let tabla = document.querySelector(".tabla");
    let tr = document.createElement('tr');
    tr.innerHTML = fila;
    tabla.appendChild(tr);
    numero++;
}

function procesarPeticion() {
    if (this.readyState == 4 && this.status == 200) {
        let objetoResultado = JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }
}

function procesarResultado(objetoResultado) {
    for (let restaurante of objetoResultado.results.bindings) {
        pintarRestaurante(restaurante);
    }
}

boton.addEventListener("click", function() {
    let peticionAjax = new XMLHttpRequest();
    peticionAjax.addEventListener("readystatechange", procesarPeticion);
    peticionAjax.open("GET", "https://raw.githubusercontent.com/fredericsangar/backupOpendataCCJSON/master/restaurantes.json");
    peticionAjax.send();
});



