import { PokeInterface } from "./interfaces/pokeInterface";
import { colorType } from "./interfaces/pokeInterface";
import { datosPokemon } from "./util/datosPokemon";

export class pantallaItem {

    pantalla:HTMLElement

    pokemonActual:PokeInterface
    pokemon:datosPokemon
    id:number

    constructor() {
        this.pokemon = new datosPokemon();
        this.id = 1;
        this.pantalla = <HTMLElement> document.getElementById("pantalla")
        this.pokemon.getPokemonForId(this, this.id);
        console.log("en contructor");
    }

    setPokemon(poke:PokeInterface) {
        this.pokemonActual = poke;
        if (this.pantalla.hasChildNodes()) {
            let divImg:HTMLDivElement = <HTMLDivElement> document.getElementById('divImg');
            let divDescription:HTMLDivElement = <HTMLDivElement> document.getElementById('description');
            this.pantalla.removeChild(divImg);
            this.pantalla.removeChild(divDescription);
        }
        
    }

    mostrarEnPantalla() {
         let divImg:HTMLDivElement = <HTMLDivElement> document.createElement('div');
         let divInfo:HTMLDivElement = <HTMLDivElement> document.createElement('div');
         let divType:HTMLDivElement = <HTMLDivElement> document.createElement('div');
         let divDescription:HTMLDivElement = <HTMLDivElement> document.createElement('div');

         divDescription.setAttribute('id', 'description');
         
         divImg.setAttribute('id', 'divImg');
         divImg.innerHTML = `<img id="pokemonImg" src="${this.pokemonActual.sprites.front_default}" alt="${this.pokemonActual.name}" draggable="false"><p id="pokeName">${this.pokemonActual.name}</p>`;

         divInfo.setAttribute('id', 'divInfo');
         divInfo.innerHTML = `<h1>sizes:</h1><p>Height: ${this.pokemonActual.height} cm</p><p>weight: ${this.pokemonActual.weight} cm</p> <p>pokedex: ${this.pokemonActual.id}</p>`

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

         this.pantalla.appendChild(divImg);
         this.pantalla.appendChild(divDescription);
         
         console.log("agregando item");
    }

    sumid() {
        this.id++
        this.pokemon.getPokemonForId(this, this.id);
    }

    subtractid() {
        this.id--
        if(this.id < 1) this.id = 1;
        this.pokemon.getPokemonForId(this, this.id)
    }
}
