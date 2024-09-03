import { PokeInterface } from "./interfaces/pokeInterface";
import { datosPokemon } from "./util/datosPokemon";

export class pantallaItem {

    pokemonActual:PokeInterface

    constructor() {
        let pokemon:datosPokemon = new datosPokemon();
        pokemon.getPokemonForId(this);
        console.log("en contructor");
    }

    setPokemon(poke:PokeInterface) {
        this.pokemonActual = poke;
    }

    mostrarEnPantalla() {
         let pantalla:HTMLElement = document.getElementById("pantalla");
         let divImg:HTMLDivElement = document.createElement('div');
         let divInfo:HTMLDivElement = document.createElement('div');
         
         divImg.innerHTML = `<img id="pokemonImg" src="${this.pokemonActual.sprites.front_default}" alt="${this.pokemonActual.name}" draggable="false">`;

         pantalla.appendChild(divImg);
         console.log("agregando item");
         
    }
}