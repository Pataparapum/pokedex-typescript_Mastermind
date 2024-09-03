let colorType = {
    "steel": "#60A2B9",
    "water": "#2481EF",
    "bug": "#92A212",
    "dragon": "#4F60E2",
    "electric": "#f9c000",
    "ghost": "#703f70",
    "fire": "#e72324",
    "fairy": "#ef70ef",
    "ice": "#3dd9ff",
    "fighting": "#ff8100",
    "normal": "#9fa09f",
    "grass": "#3da224",
    "psychic": "#ef3f7a",
    "rock": "#b0aa82",
    "dark": "#4f3f3d",
    "ground": "#92501b", 
    "poison": "#923fcc",
    "flying": "#82b9ef"

}

interface TypeInterface {
    type:{name:string};
}

interface PokeInterface {
    id:number,
    name:string,
    types:TypeInterface[],
    height:string,
    weight:string,
    sprites:{front_default:string},
}


export { PokeInterface, colorType}