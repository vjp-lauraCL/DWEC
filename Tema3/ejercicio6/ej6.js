document.addEventListener("DOMContentLoaded", main);
function main(){
    document.getElementById("divRojo").addEventListener("click", (evento)=> 
        {console.log("Pulsaste el divRojo")
        }
    
);
    document.getElementById("divAzul").addEventListener("click", (evento) =>
         {console.log("Pulsaste el divAzul") 
            evento.stopPropagation();
         }
        );
    document.getElementById("divVerde").addEventListener("click", (evento) =>
        {console.log("pulsaste el divVerde")}
);
}
