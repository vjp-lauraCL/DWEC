/**Creamos una función para validar el DNI. El DNI solo puede tener entre 7 u 8 números y una letra en mayusculas */
function validarDNI(){
    let input = document.getElementById("dni").value;
    let dniRegex = /^[0-9]{8}[A-Z]$/;
    let resultado = dniRegex.test(input) ? "Es un DNI válido." : "No es un DNI válido.";
    alert(resultado);
}
/**Validamos la fecha. La fecha tiene que tener 2 digitos al principio y en medio, al final debe tener 4. */
function validarFecha() {
    let input = document.getElementById('dni').value;
    let fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    let resultado = fechaRegex.test(input) ? "Es una fecha válida." : "No es una fecha válida";
   alert(resultado);
}

/**Validamos el identificador. El validar debe tener letras y numeros, además de algún caracter que no sea el espacio. */
function validarIdentificador() {
    let input = document.getElementById('dni').value;
    let identificadorRegex = /^[a-z_][a-zA-Z0-9_]*$/;
    let resultado = identificadorRegex.test(input) ? "Es un identificador válido." : "No es un identificador válido.";
   alert(resultado);
}