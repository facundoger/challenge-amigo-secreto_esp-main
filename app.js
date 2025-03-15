// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
function agregarAmigo(){ // Agrega un amigo nuevo a la lista "amigos" siempre que el usuario haya cargado un nombre 
    let nombreDelAmigo = document.getElementById('amigo').value;
    if (nombreDelAmigo == '')
        alert('Por favor, inserte un nombre.');
    else {
        amigos.push(nombreDelAmigo);
        console.log(amigos);
        actualizarLista(amigos);
        limpiarCaja();
    }
}
function actualizarLista(lista){ //Muestra la lista de nombres de amigos en pantalla en formato de items
    asignarTextoElemento('#listaAmigos', lista);
    lista.innerHTML="";
    for (let i = 0; i < lista.length; i++) {
        let amigo = document.createElement('li'); // Crear un nuevo <li>
        amigo.textContent = lista[i]; // Asignar el nombre del amigo
        lista.appendChild(amigo); // Agregar el elemento <li> a la lista
    }
}

function sortearAmigo(){ //Elige aleatoriamente un amigo secreto de la lista "amigos".
    if (amigos.length != 0){
        let indiceAmigoSorteado = Math.floor(Math.random()*amigos.length);
        amigoSorteado = amigos[indiceAmigoSorteado];
        console.log(amigoSorteado);
        asignarTextoElemento('#resultado', amigoSorteado);
    }
    else
        alert('Por favor, añade amigos para participar del sorteo. ')
}
