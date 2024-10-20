function validarDNI(){
    let input = document.getElementById("dni").value;
    let dniRegex = /^[0-9]{8}[A-Z]$/;
    let resultado = dniRegex.test(input) ? "Es un DNI válido." : "No es un DNI válido.";
    alert(resultado);
}

function validarFecha() {
    let input = document.getElementById('dni').value;
    let fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    let resultado = fechaRegex.test(input) ? "Es una fecha válida." : "No es una fecha válida";
   alert(resultado);
}

function validarIdentificador() {
    let input = document.getElementById('dni').value;
    let identificadorRegex = /^[a-z_][a-zA-Z0-9_]*$/;
    let resultado = identificadorRegex.test(input) ? "Es un identificador válido." : "No es un identificador válido.";
   alert(resultado);
}