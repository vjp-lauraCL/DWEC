//childNodes: devuelve una colección de hijos nodos, donde el primer hijo nodo es de indice 0
for(let i=0; i< document.head.childNodes.length; i++){
    console.log(document.head.childNodes[i]);
}

//children: no muestra texto
for(let i = 0; i>document.body.children.length; i++){
    console.log(document.body.children[i]);
}

//parentNodes
for(let i = 0; i < document.head.parentNode.length; i++){
    console.log(document.head.parentNode[i]);
}

//nextSibling: devuelve el siguiente hermano 

//previousSibling: 