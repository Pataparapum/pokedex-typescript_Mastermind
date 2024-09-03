import { PokeInterface } from '../interfaces/pokeInterface';
import { pantallaItem } from '../pantalla';
import { colorType } from '../interfaces/pokeInterface';

export class datosPokemon {

    /**
     * atributos
     */
    id:number

    /**
     * Constructor
     */
    constructor() {
        this.id = 1;
    }

    /**
     * Funciones para aumentar o disminuir el valor de id
     */
    sumOneToId() {
        this.id += 1;
    }

    minOneToId() {
        this.id -= 1;
        if (this.id < 1) this.id = 1;
    }

    /**
     * Metodo para optener el pokemon por su id
     */
    getPokemonForId(pantalla:pantallaItem) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
            .then((response) => response.json())
            .then((data) => {
                let pokemon:PokeInterface;
                pokemon = data;  
                pantalla.setPokemon(pokemon);
                pantalla.mostrarEnPantalla()
            })
    }

    /**
     * Funcion para obtener el pokemon por su nombre
     * @param name
     */
    getPokemonForName(name:string) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => {
                let pokemon:PokeInterface;
                pokemon = data;       
            })
    }
}
