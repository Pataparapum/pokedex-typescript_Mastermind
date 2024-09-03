import { pantallaItem } from "./pantalla";

// pantalla
let pantalla:pantallaItem = new pantallaItem();

// Elementos usados en los eventos
let next:HTMLButtonElement = <HTMLButtonElement> document.getElementById('next');
let back:HTMLButtonElement = <HTMLButtonElement> document.getElementById('back');
let pkmName:HTMLInputElement = <HTMLInputElement> document.getElementById('pokemonName')
let btnName:HTMLInputElement = <HTMLInputElement> document.getElementById('buscar')

/**
 * Busqueda de pokemon por su nombre
 * @param event 
 */
function getPkm(event:Event) {
    let val:string = pkmName.value;
    if (val) {
        pantalla.getPkmForName(val);
    } else {
        let message:string = "Debe ingresar un valor para buscar un pokemon"
        pantalla.errorMessage(message);
    }
    event.preventDefault
}

/**
 * Evento para avanzar a la siguiente entrada
 * de la pokedex
 * @param event 
 */
function adelante(event:any) {
    pantalla.sumid()
}

/**
 * Evento para retroseder a la entrada anterior
 * de la podedex
 * @param event 
 */
function atras(event:any) {
    pantalla.subtractid()
}

// Eventos
next.addEventListener('click', adelante);
back.addEventListener('click', atras)
btnName.addEventListener('click', getPkm)


