document.addEventListener("DOMContentLoaded", acciones);
function acciones(){
    let elemento = document.querySelector("div");
    elemento.style.width = "200px";
    elemento.style.height = "200px";
    elemento.style.backgroundColor = "#9e9e9e";
    elemento.style.color = "blue";
    elemento.style.border = "1px solid red";
    
    
    
window.addEventListener("resize", redimension);
function redimension(event){
     elemento.textContent = window.innerWidth + " - " + window.innerHeight;
    }
}