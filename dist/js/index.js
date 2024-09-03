/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/interfaces/pokeInterface.ts":
/*!*****************************************!*\
  !*** ./src/interfaces/pokeInterface.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.colorType = void 0;
/**
 * map de tipo con sus colores
 */
let colorType = [
    { "tipo": "steel", "color": "#60A2B9" },
    { "tipo": "water", "color": "#2481EF" },
    { "tipo": "bug", "color": "#92A212" },
    { "tipo": "dragon", "color": "#4F60E2" },
    { "tipo": "electric", "color": "#f9c000" },
    { "tipo": "ghost", "color": "#703f70" },
    { "tipo": "fire", "color": "#e72324" },
    { "tipo": "fairy", "color": "#ef70ef" },
    { "tipo": "ice", "color": "#3dd9ff" },
    { "tipo": "fighting", "color": "#ff8100" },
    { "tipo": "normal", "color": "#9fa09f" },
    { "tipo": "grass", "color": "#3da224" },
    { "tipo": "psychic", "color": "#ef3f7a" },
    { "tipo": "rock", "color": "#b0aa82" },
    { "tipo": "dark", "color": "#4f3f3d" },
    { "tipo": "ground", "color": "#92501b" },
    { "tipo": "poison", "color": "#923fcc" },
    { "tipo": "flying", "color": "#82b9ef" }
];
exports.colorType = colorType;


/***/ }),

/***/ "./src/pantalla.ts":
/*!*************************!*\
  !*** ./src/pantalla.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pantallaItem = void 0;
const pokeInterface_1 = __webpack_require__(/*! ./interfaces/pokeInterface */ "./src/interfaces/pokeInterface.ts");
const datosPokemon_1 = __webpack_require__(/*! ./util/datosPokemon */ "./src/util/datosPokemon.ts");
class pantallaItem {
    /**
     * Constructor
     */
    constructor() {
        this.pokemon = new datosPokemon_1.datosPokemon();
        this.id = 1;
        this.pantalla = document.getElementById("pantalla");
        this.pokemon.getPokemonForId(this, this.id);
        console.log("en contructor");
    }
    /**
     * Metodo que llama al metodo de la clase "pokemon"
     * que busca a un pokemon en la api por su nombre
     * @param name
     */
    getPkmForName(name) {
        this.pokemon.getPokemonForName(this, name);
        setTimeout(() => {
            if (this.pokemonActual.name == name) {
                this.mostrarEnPantalla();
            }
        }, 900);
    }
    /**
     * Metodo al pokemon obtenido de la busquda en el atributo
     * de "pokemonActual"
     * @param poke
     */
    setPokemon(poke) {
        this.pokemonActual = poke;
        if (this.pantalla.hasChildNodes()) {
            let divImg = document.getElementById('divImg');
            let divDescription = document.getElementById('description');
            let error = document.getElementById("error");
            if (divImg)
                this.pantalla.removeChild(divImg);
            if (divDescription)
                this.pantalla.removeChild(divDescription);
            if (error)
                this.pantalla.removeChild(error);
        }
    }
    /**
     * Metodo que añade los nodos hijos que contienen la información del
     * pokemon, en el HTMLElement correspondiente a la pantalla
     */
    mostrarEnPantalla() {
        let divImg = document.createElement('div');
        let divInfo = document.createElement('div');
        let divType = document.createElement('div');
        let divDescription = document.createElement('div');
        divDescription.setAttribute('id', 'description');
        divImg.setAttribute('id', 'divImg');
        divImg.innerHTML = `<img id="pokemonImg" src="${this.pokemonActual.sprites.front_default}" alt="${this.pokemonActual.name}" draggable="false"><p id="pokeName">${this.pokemonActual.name}</p>`;
        divInfo.setAttribute('id', 'divInfo');
        divInfo.innerHTML = `<h1>sizes:</h1><p>Height: ${this.pokemonActual.height} cm</p><p>weight: ${this.pokemonActual.weight} cm</p> <p>pokedex: ${this.pokemonActual.id}</p>`;
        divType.setAttribute('id', 'divType');
        divType.innerHTML = "<h1>Types:</h1>";
        for (let type of this.pokemonActual.types) {
            let p = document.createElement('p');
            p.innerText += `${type.type.name}`;
            p.style.background = pokeInterface_1.colorType.find((cType) => cType.tipo == type.type.name).color;
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
    errorMessage(error) {
        let divImg = document.getElementById('divImg');
        let divDescription = document.getElementById('description');
        this.pantalla.removeChild(divImg);
        this.pantalla.removeChild(divDescription);
        this.pantalla.innerHTML = `<h2 id="error">${error}</h2>`;
    }
    /**
     * Sumo 1 al id, y busca al pokemon correspondiente
     * al nuevo id
     */
    sumid() {
        this.id++;
        this.pokemon.getPokemonForId(this, this.id);
    }
    /**
     * Resta 1 al id a no ser que el valor del id ya sea 1,
     * busca al pokemon segun el nuevo id
     */
    subtractid() {
        this.id--;
        if (this.id < 1)
            this.id = 1;
        this.pokemon.getPokemonForId(this, this.id);
    }
}
exports.pantallaItem = pantallaItem;


/***/ }),

/***/ "./src/util/datosPokemon.ts":
/*!**********************************!*\
  !*** ./src/util/datosPokemon.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.datosPokemon = void 0;
class datosPokemon {
    /**
     * Metodo para optener el pokemon por su id
     */
    getPokemonForId(pantalla, id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
            let pokemon;
            pokemon = data;
            pantalla.setPokemon(pokemon);
            pantalla.mostrarEnPantalla();
        });
    }
    /**
     * Funcion para obtener el pokemon por su nombre
     * @param name
     */
    getPokemonForName(pantalla, name) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => {
            let pokemon;
            pokemon = data;
            pantalla.setPokemon(pokemon);
        })
            .catch((err) => {
            let message = `El pokemon "${name}" no existe`;
            pantalla.errorMessage(message);
            console.log(err);
        });
    }
}
exports.datosPokemon = datosPokemon;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const pantalla_1 = __webpack_require__(/*! ./pantalla */ "./src/pantalla.ts");
// pantalla
let pantalla = new pantalla_1.pantallaItem();
// Elementos usados en los eventos
let next = document.getElementById('next');
let back = document.getElementById('back');
let pkmName = document.getElementById('pokemonName');
let btnName = document.getElementById('buscar');
/**
 * Busqueda de pokemon por su nombre
 * @param event
 */
function getPkm(event) {
    let val = pkmName.value;
    if (val) {
        pantalla.getPkmForName(val);
    }
    else {
        let message = "Debe ingresar un valor para buscar un pokemon";
        pantalla.errorMessage(message);
    }
    event.preventDefault;
}
/**
 * Evento para avanzar a la siguiente entrada
 * de la pokedex
 * @param event
 */
function adelante(event) {
    pantalla.sumid();
}
/**
 * Evento para retroseder a la entrada anterior
 * de la podedex
 * @param event
 */
function atras(event) {
    pantalla.subtractid();
}
// Eventos
next.addEventListener('click', adelante);
back.addEventListener('click', atras);
btnName.addEventListener('click', getPkm);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9pbnRlcmZhY2VzL3Bva2VJbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9wYW50YWxsYS50cyIsIndlYnBhY2s6Ly93b25kZXJmb29kLy4vc3JjL3V0aWwvZGF0b3NQb2tlbW9uLnRzIiwid2VicGFjazovL3dvbmRlcmZvb2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jb2xvclR5cGUgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBtYXAgZGUgdGlwbyBjb24gc3VzIGNvbG9yZXNcclxuICovXHJcbmxldCBjb2xvclR5cGUgPSBbXHJcbiAgICB7IFwidGlwb1wiOiBcInN0ZWVsXCIsIFwiY29sb3JcIjogXCIjNjBBMkI5XCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwid2F0ZXJcIiwgXCJjb2xvclwiOiBcIiMyNDgxRUZcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJidWdcIiwgXCJjb2xvclwiOiBcIiM5MkEyMTJcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJkcmFnb25cIiwgXCJjb2xvclwiOiBcIiM0RjYwRTJcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJlbGVjdHJpY1wiLCBcImNvbG9yXCI6IFwiI2Y5YzAwMFwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImdob3N0XCIsIFwiY29sb3JcIjogXCIjNzAzZjcwXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiZmlyZVwiLCBcImNvbG9yXCI6IFwiI2U3MjMyNFwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImZhaXJ5XCIsIFwiY29sb3JcIjogXCIjZWY3MGVmXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiaWNlXCIsIFwiY29sb3JcIjogXCIjM2RkOWZmXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiZmlnaHRpbmdcIiwgXCJjb2xvclwiOiBcIiNmZjgxMDBcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJub3JtYWxcIiwgXCJjb2xvclwiOiBcIiM5ZmEwOWZcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJncmFzc1wiLCBcImNvbG9yXCI6IFwiIzNkYTIyNFwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcInBzeWNoaWNcIiwgXCJjb2xvclwiOiBcIiNlZjNmN2FcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJyb2NrXCIsIFwiY29sb3JcIjogXCIjYjBhYTgyXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiZGFya1wiLCBcImNvbG9yXCI6IFwiIzRmM2YzZFwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImdyb3VuZFwiLCBcImNvbG9yXCI6IFwiIzkyNTAxYlwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcInBvaXNvblwiLCBcImNvbG9yXCI6IFwiIzkyM2ZjY1wiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImZseWluZ1wiLCBcImNvbG9yXCI6IFwiIzgyYjllZlwiIH1cclxuXTtcclxuZXhwb3J0cy5jb2xvclR5cGUgPSBjb2xvclR5cGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucGFudGFsbGFJdGVtID0gdm9pZCAwO1xyXG5jb25zdCBwb2tlSW50ZXJmYWNlXzEgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL3Bva2VJbnRlcmZhY2VcIik7XHJcbmNvbnN0IGRhdG9zUG9rZW1vbl8xID0gcmVxdWlyZShcIi4vdXRpbC9kYXRvc1Bva2Vtb25cIik7XHJcbmNsYXNzIHBhbnRhbGxhSXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9rZW1vbiA9IG5ldyBkYXRvc1Bva2Vtb25fMS5kYXRvc1Bva2Vtb24oKTtcclxuICAgICAgICB0aGlzLmlkID0gMTtcclxuICAgICAgICB0aGlzLnBhbnRhbGxhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYW50YWxsYVwiKTtcclxuICAgICAgICB0aGlzLnBva2Vtb24uZ2V0UG9rZW1vbkZvcklkKHRoaXMsIHRoaXMuaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW4gY29udHJ1Y3RvclwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTWV0b2RvIHF1ZSBsbGFtYSBhbCBtZXRvZG8gZGUgbGEgY2xhc2UgXCJwb2tlbW9uXCJcclxuICAgICAqIHF1ZSBidXNjYSBhIHVuIHBva2Vtb24gZW4gbGEgYXBpIHBvciBzdSBub21icmVcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKi9cclxuICAgIGdldFBrbUZvck5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMucG9rZW1vbi5nZXRQb2tlbW9uRm9yTmFtZSh0aGlzLCBuYW1lKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9rZW1vbkFjdHVhbC5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhckVuUGFudGFsbGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDkwMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE1ldG9kbyBhbCBwb2tlbW9uIG9idGVuaWRvIGRlIGxhIGJ1c3F1ZGEgZW4gZWwgYXRyaWJ1dG9cclxuICAgICAqIGRlIFwicG9rZW1vbkFjdHVhbFwiXHJcbiAgICAgKiBAcGFyYW0gcG9rZVxyXG4gICAgICovXHJcbiAgICBzZXRQb2tlbW9uKHBva2UpIHtcclxuICAgICAgICB0aGlzLnBva2Vtb25BY3R1YWwgPSBwb2tlO1xyXG4gICAgICAgIGlmICh0aGlzLnBhbnRhbGxhLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBsZXQgZGl2SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdkltZycpO1xyXG4gICAgICAgICAgICBsZXQgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgbGV0IGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgaWYgKGRpdkltZylcclxuICAgICAgICAgICAgICAgIHRoaXMucGFudGFsbGEucmVtb3ZlQ2hpbGQoZGl2SW1nKTtcclxuICAgICAgICAgICAgaWYgKGRpdkRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW50YWxsYS5yZW1vdmVDaGlsZChkaXZEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcilcclxuICAgICAgICAgICAgICAgIHRoaXMucGFudGFsbGEucmVtb3ZlQ2hpbGQoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTWV0b2RvIHF1ZSBhw7FhZGUgbG9zIG5vZG9zIGhpam9zIHF1ZSBjb250aWVuZW4gbGEgaW5mb3JtYWNpw7NuIGRlbFxyXG4gICAgICogcG9rZW1vbiwgZW4gZWwgSFRNTEVsZW1lbnQgY29ycmVzcG9uZGllbnRlIGEgbGEgcGFudGFsbGFcclxuICAgICAqL1xyXG4gICAgbW9zdHJhckVuUGFudGFsbGEoKSB7XHJcbiAgICAgICAgbGV0IGRpdkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGRpdlR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgZGl2SW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2SW1nJyk7XHJcbiAgICAgICAgZGl2SW1nLmlubmVySFRNTCA9IGA8aW1nIGlkPVwicG9rZW1vbkltZ1wiIHNyYz1cIiR7dGhpcy5wb2tlbW9uQWN0dWFsLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cIiBhbHQ9XCIke3RoaXMucG9rZW1vbkFjdHVhbC5uYW1lfVwiIGRyYWdnYWJsZT1cImZhbHNlXCI+PHAgaWQ9XCJwb2tlTmFtZVwiPiR7dGhpcy5wb2tlbW9uQWN0dWFsLm5hbWV9PC9wPmA7XHJcbiAgICAgICAgZGl2SW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdkluZm8nKTtcclxuICAgICAgICBkaXZJbmZvLmlubmVySFRNTCA9IGA8aDE+c2l6ZXM6PC9oMT48cD5IZWlnaHQ6ICR7dGhpcy5wb2tlbW9uQWN0dWFsLmhlaWdodH0gY208L3A+PHA+d2VpZ2h0OiAke3RoaXMucG9rZW1vbkFjdHVhbC53ZWlnaHR9IGNtPC9wPiA8cD5wb2tlZGV4OiAke3RoaXMucG9rZW1vbkFjdHVhbC5pZH08L3A+YDtcclxuICAgICAgICBkaXZUeXBlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2VHlwZScpO1xyXG4gICAgICAgIGRpdlR5cGUuaW5uZXJIVE1MID0gXCI8aDE+VHlwZXM6PC9oMT5cIjtcclxuICAgICAgICBmb3IgKGxldCB0eXBlIG9mIHRoaXMucG9rZW1vbkFjdHVhbC50eXBlcykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgcC5pbm5lclRleHQgKz0gYCR7dHlwZS50eXBlLm5hbWV9YDtcclxuICAgICAgICAgICAgcC5zdHlsZS5iYWNrZ3JvdW5kID0gcG9rZUludGVyZmFjZV8xLmNvbG9yVHlwZS5maW5kKChjVHlwZSkgPT4gY1R5cGUudGlwbyA9PSB0eXBlLnR5cGUubmFtZSkuY29sb3I7XHJcbiAgICAgICAgICAgIGRpdlR5cGUuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRpdkluZm8pO1xyXG4gICAgICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRpdlR5cGUpO1xyXG4gICAgICAgIHRoaXMucGFudGFsbGEuYXBwZW5kQ2hpbGQoZGl2SW1nKTtcclxuICAgICAgICB0aGlzLnBhbnRhbGxhLmFwcGVuZENoaWxkKGRpdkRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTXVlc3RyYSBlbiBsYSBwYW50YWxsYSB1biBtZW5zYWplIGRlIGVycm9yXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JcclxuICAgICAqL1xyXG4gICAgZXJyb3JNZXNzYWdlKGVycm9yKSB7XHJcbiAgICAgICAgbGV0IGRpdkltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZJbWcnKTtcclxuICAgICAgICBsZXQgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICB0aGlzLnBhbnRhbGxhLnJlbW92ZUNoaWxkKGRpdkltZyk7XHJcbiAgICAgICAgdGhpcy5wYW50YWxsYS5yZW1vdmVDaGlsZChkaXZEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy5wYW50YWxsYS5pbm5lckhUTUwgPSBgPGgyIGlkPVwiZXJyb3JcIj4ke2Vycm9yfTwvaDI+YDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3VtbyAxIGFsIGlkLCB5IGJ1c2NhIGFsIHBva2Vtb24gY29ycmVzcG9uZGllbnRlXHJcbiAgICAgKiBhbCBudWV2byBpZFxyXG4gICAgICovXHJcbiAgICBzdW1pZCgpIHtcclxuICAgICAgICB0aGlzLmlkKys7XHJcbiAgICAgICAgdGhpcy5wb2tlbW9uLmdldFBva2Vtb25Gb3JJZCh0aGlzLCB0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzdGEgMSBhbCBpZCBhIG5vIHNlciBxdWUgZWwgdmFsb3IgZGVsIGlkIHlhIHNlYSAxLFxyXG4gICAgICogYnVzY2EgYWwgcG9rZW1vbiBzZWd1biBlbCBudWV2byBpZFxyXG4gICAgICovXHJcbiAgICBzdWJ0cmFjdGlkKCkge1xyXG4gICAgICAgIHRoaXMuaWQtLTtcclxuICAgICAgICBpZiAodGhpcy5pZCA8IDEpXHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSAxO1xyXG4gICAgICAgIHRoaXMucG9rZW1vbi5nZXRQb2tlbW9uRm9ySWQodGhpcywgdGhpcy5pZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wYW50YWxsYUl0ZW0gPSBwYW50YWxsYUl0ZW07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGF0b3NQb2tlbW9uID0gdm9pZCAwO1xyXG5jbGFzcyBkYXRvc1Bva2Vtb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRvZG8gcGFyYSBvcHRlbmVyIGVsIHBva2Vtb24gcG9yIHN1IGlkXHJcbiAgICAgKi9cclxuICAgIGdldFBva2Vtb25Gb3JJZChwYW50YWxsYSwgaWQpIHtcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb2tlbW9uO1xyXG4gICAgICAgICAgICBwb2tlbW9uID0gZGF0YTtcclxuICAgICAgICAgICAgcGFudGFsbGEuc2V0UG9rZW1vbihwb2tlbW9uKTtcclxuICAgICAgICAgICAgcGFudGFsbGEubW9zdHJhckVuUGFudGFsbGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRnVuY2lvbiBwYXJhIG9idGVuZXIgZWwgcG9rZW1vbiBwb3Igc3Ugbm9tYnJlXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICovXHJcbiAgICBnZXRQb2tlbW9uRm9yTmFtZShwYW50YWxsYSwgbmFtZSkge1xyXG4gICAgICAgIGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtuYW1lfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9rZW1vbjtcclxuICAgICAgICAgICAgcG9rZW1vbiA9IGRhdGE7XHJcbiAgICAgICAgICAgIHBhbnRhbGxhLnNldFBva2Vtb24ocG9rZW1vbik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBgRWwgcG9rZW1vbiBcIiR7bmFtZX1cIiBubyBleGlzdGVgO1xyXG4gICAgICAgICAgICBwYW50YWxsYS5lcnJvck1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kYXRvc1Bva2Vtb24gPSBkYXRvc1Bva2Vtb247XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwYW50YWxsYV8xID0gcmVxdWlyZShcIi4vcGFudGFsbGFcIik7XHJcbi8vIHBhbnRhbGxhXHJcbmxldCBwYW50YWxsYSA9IG5ldyBwYW50YWxsYV8xLnBhbnRhbGxhSXRlbSgpO1xyXG4vLyBFbGVtZW50b3MgdXNhZG9zIGVuIGxvcyBldmVudG9zXHJcbmxldCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxubGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjaycpO1xyXG5sZXQgcGttTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uTmFtZScpO1xyXG5sZXQgYnRuTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXNjYXInKTtcclxuLyoqXHJcbiAqIEJ1c3F1ZWRhIGRlIHBva2Vtb24gcG9yIHN1IG5vbWJyZVxyXG4gKiBAcGFyYW0gZXZlbnRcclxuICovXHJcbmZ1bmN0aW9uIGdldFBrbShldmVudCkge1xyXG4gICAgbGV0IHZhbCA9IHBrbU5hbWUudmFsdWU7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgcGFudGFsbGEuZ2V0UGttRm9yTmFtZSh2YWwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIkRlYmUgaW5ncmVzYXIgdW4gdmFsb3IgcGFyYSBidXNjYXIgdW4gcG9rZW1vblwiO1xyXG4gICAgICAgIHBhbnRhbGxhLmVycm9yTWVzc2FnZShtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xyXG59XHJcbi8qKlxyXG4gKiBFdmVudG8gcGFyYSBhdmFuemFyIGEgbGEgc2lndWllbnRlIGVudHJhZGFcclxuICogZGUgbGEgcG9rZWRleFxyXG4gKiBAcGFyYW0gZXZlbnRcclxuICovXHJcbmZ1bmN0aW9uIGFkZWxhbnRlKGV2ZW50KSB7XHJcbiAgICBwYW50YWxsYS5zdW1pZCgpO1xyXG59XHJcbi8qKlxyXG4gKiBFdmVudG8gcGFyYSByZXRyb3NlZGVyIGEgbGEgZW50cmFkYSBhbnRlcmlvclxyXG4gKiBkZSBsYSBwb2RlZGV4XHJcbiAqIEBwYXJhbSBldmVudFxyXG4gKi9cclxuZnVuY3Rpb24gYXRyYXMoZXZlbnQpIHtcclxuICAgIHBhbnRhbGxhLnN1YnRyYWN0aWQoKTtcclxufVxyXG4vLyBFdmVudG9zXHJcbm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGVsYW50ZSk7XHJcbmJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHJhcyk7XHJcbmJ0bk5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRQa20pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=