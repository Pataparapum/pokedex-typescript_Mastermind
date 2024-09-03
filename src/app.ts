import { pantallaItem } from "./pantalla";

let pantalla:pantallaItem = new pantallaItem();

let next:HTMLButtonElement = <HTMLButtonElement> document.getElementById('next');
let back:HTMLButtonElement = <HTMLButtonElement> document.getElementById('back');

function adelante(event:any) {
    pantalla.sumid()
}

function atras(event:any) {
    pantalla.subtractid()
}

next.addEventListener('click', adelante);
back.addEventListener('click', atras)


