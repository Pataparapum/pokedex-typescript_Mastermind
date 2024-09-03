import { PokeInterface } from '../interfaces/pokeInterface';
import { pantallaItem } from '../pantalla';
import { colorType } from '../interfaces/pokeInterface';

export class datosPokemon {

    /**
     * Metodo para optener el pokemon por su id
     */
    getPokemonForId(pantalla:pantallaItem, id:number) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
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
