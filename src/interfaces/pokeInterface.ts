interface typeInterface {
    type:{name:string};
}

interface pokeInterface {
    id:number,
    name:string,
    types:typeInterface[],
    height:string,
    weight:string,
    sprites:{front_default:string},
}


export { pokeInterface }