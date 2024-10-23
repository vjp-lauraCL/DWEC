"use strict";

// Validación del campo nombre
function validarNombre() {
    let nombre = document.getElementById("nombre").value;
    let nombreValido = /^[a-zA-Z]+[a-zA-Z\s]*$/.test(nombre);
    if (!nombreValido) {
        document.getElementById("nombre").classList.add("is-invalid");
        return false;
    } else {
        document.getElementById("nombre").classList.remove("is-invalid");
        document.getElementById("nombre").classList.add("is-valid");
        return true;
    }
}

// Validación del campo descripción
function validarDescripcion() {
    let descripcion = document.getElementById("descripcion").value;
    if (descripcion.trim() === "") {
        document.getElementById("descripcion").classList.add("is-invalid");
        return false;
    } else {
        document.getElementById("descripcion").classList.remove("is-invalid");
        document.getElementById("descripcion").classList.add("is-valid");
        return true;
    }
}

// Validación del campo teléfono
function validarTelefono() {
    let telefono = document.getElementById("telefono").value;
    let telefonoValido = /^[0-9]{10}$/.test(telefono);
    if (!telefonoValido) {
        document.getElementById("telefono").classList.add("is-invalid");
        return false;
    } else {
        document.getElementById("telefono").classList.remove("is-invalid");
        document.getElementById("telefono").classList.add("is-valid");
        return true;
    }
}

// Validación del campo cocina
function validarCocina() {
    let cocina = document.getElementById("cocina").value;
    if (cocina.trim() === "") {
        document.getElementById("cocina").classList.add("is-invalid");
        return false;
    } else {
        document.getElementById("cocina").classList.remove("is-invalid");
        document.getElementById("cocina").classList.add("is-valid");
        return true;
    }
}

// Validación de los checkboxes
function validarCheckboxes() {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    let checked = false;
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            checked = true;
            break;
        }
    }
    if (!checked) {
        document.getElementById("diasError").classList.remove("d-none");
        return false;
    } else {
        document.getElementById("diasError").classList.add("d-none");
        return true;
    }
}

// Transformamos la imagen en un input y le añadimos el atributo src
document.getElementById("foto").addEventListener("change", event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
    }
    reader.addEventListener("load", e => {
        document.getElementById("imgPreview").src = reader.result;
    });
});

document.getElementById("newPlace").addEventListener("submit", event => {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    if (!validarNombre()) return;
    if (!validarDescripcion()) return;
    if (!validarTelefono()) return;
    if (!validarCocina()) return;
    if (!validarCheckboxes()) return;

    // Si todos los campos son válidos, agregar el restaurante a #placesContainer
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let telefono = document.getElementById("telefono").value;
    let cocina = document.getElementById("cocina").value;
    let foto = document.getElementById("imgPreview").src;

    let placeContainer = document.getElementById("placesContainer");
    let newPlace = document.createElement("div");
    newPlace.classList.add("card");
    newPlace.innerHTML = `
        <img class="card-img-top" src="${foto}" alt="Foto del restaurante">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${descripcion}</p>
            <p class="card-text">Teléfono: ${telefono}</p>
            <p class="card-text">Cocina: ${cocina}</p>
        </div>
    `;
    placeContainer.appendChild(newPlace);

    // Limpiar el formulario después de agregar el restaurante
    document.getElementById("newPlace").reset();
    document.querySelectorAll(".is-valid").forEach(element => element.classList.remove("is-valid"));
    document.getElementById("imgPreview").src = "";
});