
//1
let uno = document.getElementsByTagName("a");
for(let i = 0; i< uno.length; i++){
    console.log(uno[i].textContent);
    }

//2
function cambiarATwitter(){
let twitter = document.createElement("a");
twitter.id="twitter";

document.body.appendChild(twitter);
}

cambiarATwitter();


//3
