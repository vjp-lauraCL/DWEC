"use strict";

/**El nombre habría que mostrar un error siempre que no se haya metido nada en el input "nombre"
 * o bien no cumpla con que empiece por una letra y el resto sean letras o espacios. Si no lo cumple se 
 * añade "is-invalid" al input.
 */
document.getElementById("nombre").addEventListener("blur", event => {
    let nombre = event.target.value;
    let nombreValido = /^[a-zA-Z]+[a-zA-Z\s]*$/.test(nombre);
    if (!nombreValido) {
        event.target.classList.add("is-invalid");
    } else {
        event.target.classList.add("is-valid");
    }
}
);

/**En el checkbox comprobamos que alguno de los checkbox esté marcado, si lo está no hacemos nada. 
 * Si el checkbox no está activado deberemos mostrar un mensaje de error. Simplemente eliminando la clase 
 * ".d.none" para que sea visible. 
 * Los checkbox pueden ser seleccionado todos con querySelectorAll
 */
document.getElementById("form").addEventListener("submit", event => {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    let checked = false;
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            checked = true;
            break;
        }
    }
    if (!checked) {
        event.preventDefault();
        document.getElementById("checkboxError").classList.remove("d-none");
    }
}
);

/**Transformamos la imagen en un input y le añadimos el atributo src */
document.getElementById("foto").addEventListener("change", event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
    }
    reader.addEventListener("load", e => {
        document.getElementById("imgPreview"). src = reader.result;
});
});




