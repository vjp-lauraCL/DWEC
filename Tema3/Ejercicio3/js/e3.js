function cambiarATwitter(){
let idNuevo = document.querySelector('.linkNormal');
    if(idNuevo){
    idNuevo.id = "aTwitter";//cambiar el id de nuestro html
idNuevo.href = "https://www.twitter.com";//cambiar el enlace de nuestro html

idNuevo.textContent = 'Twitter';//cambia el texto de nuestro html

    if(idNuevo.hasAttribute('title')){//comprueba si tiene el atributo title
    idNuevo.setAttribute('title', 'Ir a Twitter');
    //idNuevo.title = "Ir a Twitter";

    }

    }
}

cambiarATwitter();