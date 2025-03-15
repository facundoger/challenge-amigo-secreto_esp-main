// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let cantidadAmigos = 0;
let amigos = [];
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
function agregarAmigo(){
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
function actualizarLista(lista){
    asignarTextoElemento('#listaAmigos', lista);
    lista.innerHTML="";
    for (let i = 0; i < lista.length; i++) {
        let amigo = document.createElement('li'); // Crear un nuevo <li>
        amigo.textContent = lista[i]; // Asignar el nombre del amigo
        lista.appendChild(amigo); // Agregar el elemento <li> a la lista
    }
}

function sortearAmigo(){
    if (amigos.length != 0){
        let indiceAmigoSorteado = Math.floor(Math.random()*amigos.length);
        amigoSorteado = amigos[indiceAmigoSorteado];
        console.log(amigoSorteado);
        asignarTextoElemento('#resultado', amigoSorteado);
    }
    else
        alert('Por favor, añade amigos para participar del sorteo. ')
}


/*function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosGenerados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
    }else {
        if(listaNumerosGenerados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
         }
    }

}*/




function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
/*function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
condicionesIniciales();*/