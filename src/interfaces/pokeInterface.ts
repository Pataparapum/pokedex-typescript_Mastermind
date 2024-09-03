/**
 * map de tipo con sus colores
 */
let colorType = [
    {"tipo" : "steel", "color": "#60A2B9"},
    {"tipo": "water", "color": "#2481EF"},
    {"tipo": "bug", "color": "#92A212"},
    {"tipo": "dragon", "color": "#4F60E2"},
    {"tipo": "electric", "color": "#f9c000"},
    {"tipo": "ghost", "color": "#703f70"},
    {"tipo": "fire", "color": "#e72324"},
    {"tipo": "fairy", "color": "#ef70ef"},
    {"tipo": "ice", "color": "#3dd9ff"},
    {"tipo": "fighting", "color": "#ff8100"},
    {"tipo": "normal", "color": "#9fa09f"},
    {"tipo": "grass", "color": "#3da224"},
    {"tipo": "psychic", "color": "#ef3f7a"},
    {"tipo": "rock", "color": "#b0aa82"},
    {"tipo": "dark", "color": "#4f3f3d"},
    {"tipo": "ground", "color": "#92501b"}, 
    {"tipo": "poison", "color": "#923fcc"},
    {"tipo":"flying", "color": "#82b9ef"}
]

/**
 * Interface de tipo
 */
interface TypeInterface {
    type:{name:string};
}

/**
 * Interface de pokemon
 */
interface PokeInterface {
    id:number,
    name:string,
    types:TypeInterface[],
    height:string,
    weight:string,
    sprites:{front_default:string},
}


export { PokeInterface, colorType, TypeInterface}