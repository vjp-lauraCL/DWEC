// Función para validar DNI
function validarDni() {
    var dni = document.getElementByName("dni").value;
    var regexDni = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    if (regexDni.test(dni)) {
        var numero = dni.substring(0, 8);
        var letra = dni.substring(8, 9).toUpperCase();
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        if (letras.charAt(parseInt(numero, 10) % 23) === letra) {
            alert("DNI válido");
        } else {
            alert("DNI no válido");
        }
    } else {
        alert("Formato de DNI no válido");
    }
}

// Función para validar fecha
function validarFecha() {
    var fecha = document.getElementByName("fecha").value;
    var regexFecha = /^\d{4}-\d{2}-\d{2}$/;
    if (regexFecha.test(fecha)) {
        var fechaActual = new Date();
        var fechaIntroducida = new Date(fecha);
        if (fechaActual.getTime() > fechaIntroducida.getTime()) {
            alert("Fecha válida");
        } else {
            alert("Fecha no válida");
        }
    } else {
        alert("Formato de fecha no válido");
    }
}

// Función para validar identificador
function validarIdentificador() {
    var identificador = document.getElementByName("identificador").value;
    var regexIdentificador = /^[a-zA-Z0-9]{9}$/;
    if (regexIdentificador.test(identificador)) {
        alert("Identificador válido");
    } else {
        alert("Identificador no válido");
    }
}