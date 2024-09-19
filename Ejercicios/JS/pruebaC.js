//Crea un programa que pida por pantalla el nombre del usuario y despues de 3 segundos genere una respuesta con el nombre que introdujo el alumno
var nombre = prompt("Introduzca un nombre: ");
setTimeout(() =>{
    alert("Hola " + nombre);
}, 3000);