import { PokeInterface } from "./interfaces/pokeInterface";
import { colorType } from "./interfaces/pokeInterface";
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
         let divType:HTMLDivElement = document.createElement('div');
         let divDescription:HTMLDivElement = document.createElement('div');

         divDescription.setAttribute('id', 'description');
         
         divImg.setAttribute('id', 'divImg');
         divImg.innerHTML = `<img id="pokemonImg" src="${this.pokemonActual.sprites.front_default}" alt="${this.pokemonActual.name}" draggable="false"><p id="pokeName">${this.pokemonActual.name}</p>`;

         divInfo.setAttribute('id', 'divInfo');
         divInfo.innerHTML = `<h1>sizes:</h1><p>Height: ${this.pokemonActual.height} cm</p><p>weight: ${this.pokemonActual.weight} cm</p>`

         divType.setAttribute('id', 'divType');
         divType.innerHTML = "<h1>Types:</h1>"
         for (let type of this.pokemonActual.types) {
          let p:HTMLParagraphElement = document.createElement('p');
          p.innerText += `${type.type.name}`;
          p.style.background = colorType.find((cType) => cType.tipo == type.type.name).color;
          divType.appendChild(p);
         }

         divDescription.appendChild(divInfo);
         divDescription.appendChild(divType);

         pantalla.appendChild(divImg);
         pantalla.appendChild(divDescription);
         
         console.log("agregando item");
         
    }
}