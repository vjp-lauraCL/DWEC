let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion)
peticionAjax.open("GET", "https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/monumentos.json");
peticionAjax.send();

function procesarPeticion() {
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let objetoResultado = JSON.parse(this.responseText);
        console.log(objetoResultado);
    }
}