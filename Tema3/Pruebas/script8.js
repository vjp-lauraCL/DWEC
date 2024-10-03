let parrafo = document.createElement("p"); 
parrafo.innerText= "parrafo añadido"; //crea un elemento que pidamos
console.log(parrafo);
document.body(append.Child(parrafo));

document.body.insertBefore(parrafo, document.getElementById("parrafoDos")); //inserta el elemento antes del seleccionado

document.getElementById("parrafoDos").remove();//elimina el elemento selecionado

document.body.replaceChild(document.createElement("p").setAttribute( "hola"));//no lo he terminado de copiar



