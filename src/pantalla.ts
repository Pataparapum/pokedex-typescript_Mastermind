import { PokeInterface } from "./interfaces/pokeInterface";
import { colorType } from "./interfaces/pokeInterface";
import { datosPokemon } from "./util/datosPokemon";

export class pantallaItem {

    /**
     * Atributos
     */
    pantalla:HTMLElement

    pokemonActual:PokeInterface
    pokemon:datosPokemon
    id:number

    /**
     * Constructor
     */
    constructor() {
        this.pokemon = new datosPokemon();
        this.id = 1;
        this.pantalla = <HTMLElement> document.getElementById("pantalla")
        this.pokemon.getPokemonForId(this, this.id);
        console.log("en contructor");
    }

    /**
     * Metodo que llama al metodo de la clase "pokemon"
     * que busca a un pokemon en la api por su nombre
     * @param name 
     */
    getPkmForName(name:string) {
        this.pokemon.getPokemonForName(this, name)
        setTimeout(() => {
            if (this.pokemonActual.name == name) {
                this.mostrarEnPantalla()
            }
        }, 900)
        
    }

    /**
     * Metodo al pokemon obtenido de la busquda en el atributo
     * de "pokemonActual"
     * @param poke 
     */
    setPokemon(poke:PokeInterface) {
        this.pokemonActual = poke;
        if (this.pantalla.hasChildNodes()) {
            let divImg:HTMLDivElement = <HTMLDivElement> document.getElementById('divImg');
            let divDescription:HTMLDivElement = <HTMLDivElement> document.getElementById('description');
            let error:HTMLElement = document.getElementById("error");
            if (divImg) this.pantalla.removeChild(divImg);
            if (divDescription) this.pantalla.removeChild(divDescription);
            if (error) this.pantalla.removeChild(error);

        }
        
    }

    /**
     * Metodo que añade los nodos hijos que contienen la información del 
     * pokemon, en el HTMLElement correspondiente a la pantalla
     */
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
    }

    /**
     * Muestra en la pantalla un mensaje de error
     * @param error 
     */
    errorMessage(error:string) {
        let divImg:HTMLDivElement = <HTMLDivElement> document.getElementById('divImg');
        let divDescription:HTMLDivElement = <HTMLDivElement> document.getElementById('description');
        this.pantalla.removeChild(divImg);
        this.pantalla.removeChild(divDescription);

        this.pantalla.innerHTML = `<h2 id="error">${error}</h2>`
    }


    /**
     * Sumo 1 al id, y busca al pokemon correspondiente
     * al nuevo id
     */
    sumid() {
        this.id++
        this.pokemon.getPokemonForId(this, this.id);
    }

    /**
     * Resta 1 al id a no ser que el valor del id ya sea 1,
     * busca al pokemon segun el nuevo id
     */
    subtractid() {
        this.id--
        if(this.id < 1) this.id = 1;
        this.pokemon.getPokemonForId(this, this.id)
    }

}
