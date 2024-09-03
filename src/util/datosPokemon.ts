import { pokeInterface } from '../interfaces/pokeInterface'

export class datosPokemon {

    getPokemonForId(id:number) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                let pokemon:pokeInterface;
                pokemon = data;

                let pantalla:HTMLElement = document.getElementById("pantalla");
                pantalla.innerHTML = `<img src="${pokemon.sprites.front_default}">`
                
            })
        
    }
}
