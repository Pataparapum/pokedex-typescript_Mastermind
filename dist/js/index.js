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
    constructor() {
        let pokemon = new datosPokemon_1.datosPokemon();
        pokemon.getPokemonForId(this);
        console.log("en contructor");
    }
    setPokemon(poke) {
        this.pokemonActual = poke;
    }
    mostrarEnPantalla() {
        let pantalla = document.getElementById("pantalla");
        let divImg = document.createElement('div');
        let divInfo = document.createElement('div');
        let divType = document.createElement('div');
        let divDescription = document.createElement('div');
        divDescription.setAttribute('id', 'description');
        divImg.setAttribute('id', 'divImg');
        divImg.innerHTML = `<img id="pokemonImg" src="${this.pokemonActual.sprites.front_default}" alt="${this.pokemonActual.name}" draggable="false"><p id="pokeName">${this.pokemonActual.name}</p>`;
        divInfo.setAttribute('id', 'divInfo');
        divInfo.innerHTML = `<h1>sizes:</h1><p>Height: ${this.pokemonActual.height} cm</p><p>weight: ${this.pokemonActual.weight} cm</p>`;
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
        pantalla.appendChild(divImg);
        pantalla.appendChild(divDescription);
        console.log("agregando item");
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
        if (this.id < 1)
            this.id = 1;
    }
    /**
     * Metodo para optener el pokemon por su id
     */
    getPokemonForId(pantalla) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
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
    getPokemonForName(name) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => {
            let pokemon;
            pokemon = data;
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
let pantalla = new pantalla_1.pantallaItem();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0EsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxtQ0FBbUM7QUFDekMsTUFBTSxzQ0FBc0M7QUFDNUMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxvQ0FBb0M7QUFDMUMsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxtQ0FBbUM7QUFDekMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSxzQ0FBc0M7QUFDNUMsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSx1Q0FBdUM7QUFDN0MsTUFBTSxvQ0FBb0M7QUFDMUMsTUFBTSxvQ0FBb0M7QUFDMUMsTUFBTSxzQ0FBc0M7QUFDNUMsTUFBTSxzQ0FBc0M7QUFDNUMsTUFBTTtBQUNOO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ3ZCSjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEIsd0JBQXdCLG1CQUFPLENBQUMscUVBQTRCO0FBQzVELHVCQUF1QixtQkFBTyxDQUFDLHVEQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELHlDQUF5QyxTQUFTLHdCQUF3Qix1Q0FBdUMsd0JBQXdCO0FBQ2pNO0FBQ0EseURBQXlELDJCQUEyQixtQkFBbUIsMkJBQTJCO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGVBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7Ozs7O0FDeENQO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsS0FBSztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7O1VDL0NwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9pbnRlcmZhY2VzL3Bva2VJbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9wYW50YWxsYS50cyIsIndlYnBhY2s6Ly93b25kZXJmb29kLy4vc3JjL3V0aWwvZGF0b3NQb2tlbW9uLnRzIiwid2VicGFjazovL3dvbmRlcmZvb2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jb2xvclR5cGUgPSB2b2lkIDA7XHJcbmxldCBjb2xvclR5cGUgPSBbXHJcbiAgICB7IFwidGlwb1wiOiBcInN0ZWVsXCIsIFwiY29sb3JcIjogXCIjNjBBMkI5XCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwid2F0ZXJcIiwgXCJjb2xvclwiOiBcIiMyNDgxRUZcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJidWdcIiwgXCJjb2xvclwiOiBcIiM5MkEyMTJcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJkcmFnb25cIiwgXCJjb2xvclwiOiBcIiM0RjYwRTJcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJlbGVjdHJpY1wiLCBcImNvbG9yXCI6IFwiI2Y5YzAwMFwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImdob3N0XCIsIFwiY29sb3JcIjogXCIjNzAzZjcwXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiZmlyZVwiLCBcImNvbG9yXCI6IFwiI2U3MjMyNFwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImZhaXJ5XCIsIFwiY29sb3JcIjogXCIjZWY3MGVmXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiaWNlXCIsIFwiY29sb3JcIjogXCIjM2RkOWZmXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiZmlnaHRpbmdcIiwgXCJjb2xvclwiOiBcIiNmZjgxMDBcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJub3JtYWxcIiwgXCJjb2xvclwiOiBcIiM5ZmEwOWZcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJncmFzc1wiLCBcImNvbG9yXCI6IFwiIzNkYTIyNFwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcInBzeWNoaWNcIiwgXCJjb2xvclwiOiBcIiNlZjNmN2FcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJyb2NrXCIsIFwiY29sb3JcIjogXCIjYjBhYTgyXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiZGFya1wiLCBcImNvbG9yXCI6IFwiIzRmM2YzZFwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImdyb3VuZFwiLCBcImNvbG9yXCI6IFwiIzkyNTAxYlwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcInBvaXNvblwiLCBcImNvbG9yXCI6IFwiIzkyM2ZjY1wiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImZseWluZ1wiLCBcImNvbG9yXCI6IFwiIzgyYjllZlwiIH1cclxuXTtcclxuZXhwb3J0cy5jb2xvclR5cGUgPSBjb2xvclR5cGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucGFudGFsbGFJdGVtID0gdm9pZCAwO1xyXG5jb25zdCBwb2tlSW50ZXJmYWNlXzEgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL3Bva2VJbnRlcmZhY2VcIik7XHJcbmNvbnN0IGRhdG9zUG9rZW1vbl8xID0gcmVxdWlyZShcIi4vdXRpbC9kYXRvc1Bva2Vtb25cIik7XHJcbmNsYXNzIHBhbnRhbGxhSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBsZXQgcG9rZW1vbiA9IG5ldyBkYXRvc1Bva2Vtb25fMS5kYXRvc1Bva2Vtb24oKTtcclxuICAgICAgICBwb2tlbW9uLmdldFBva2Vtb25Gb3JJZCh0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuIGNvbnRydWN0b3JcIik7XHJcbiAgICB9XHJcbiAgICBzZXRQb2tlbW9uKHBva2UpIHtcclxuICAgICAgICB0aGlzLnBva2Vtb25BY3R1YWwgPSBwb2tlO1xyXG4gICAgfVxyXG4gICAgbW9zdHJhckVuUGFudGFsbGEoKSB7XHJcbiAgICAgICAgbGV0IHBhbnRhbGxhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYW50YWxsYVwiKTtcclxuICAgICAgICBsZXQgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGRpdkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgZGl2VHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCBkaXZEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdkRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBkaXZJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdkaXZJbWcnKTtcclxuICAgICAgICBkaXZJbWcuaW5uZXJIVE1MID0gYDxpbWcgaWQ9XCJwb2tlbW9uSW1nXCIgc3JjPVwiJHt0aGlzLnBva2Vtb25BY3R1YWwuc3ByaXRlcy5mcm9udF9kZWZhdWx0fVwiIGFsdD1cIiR7dGhpcy5wb2tlbW9uQWN0dWFsLm5hbWV9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj48cCBpZD1cInBva2VOYW1lXCI+JHt0aGlzLnBva2Vtb25BY3R1YWwubmFtZX08L3A+YDtcclxuICAgICAgICBkaXZJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2SW5mbycpO1xyXG4gICAgICAgIGRpdkluZm8uaW5uZXJIVE1MID0gYDxoMT5zaXplczo8L2gxPjxwPkhlaWdodDogJHt0aGlzLnBva2Vtb25BY3R1YWwuaGVpZ2h0fSBjbTwvcD48cD53ZWlnaHQ6ICR7dGhpcy5wb2tlbW9uQWN0dWFsLndlaWdodH0gY208L3A+YDtcclxuICAgICAgICBkaXZUeXBlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2VHlwZScpO1xyXG4gICAgICAgIGRpdlR5cGUuaW5uZXJIVE1MID0gXCI8aDE+VHlwZXM6PC9oMT5cIjtcclxuICAgICAgICBmb3IgKGxldCB0eXBlIG9mIHRoaXMucG9rZW1vbkFjdHVhbC50eXBlcykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgcC5pbm5lclRleHQgKz0gYCR7dHlwZS50eXBlLm5hbWV9YDtcclxuICAgICAgICAgICAgcC5zdHlsZS5iYWNrZ3JvdW5kID0gcG9rZUludGVyZmFjZV8xLmNvbG9yVHlwZS5maW5kKChjVHlwZSkgPT4gY1R5cGUudGlwbyA9PSB0eXBlLnR5cGUubmFtZSkuY29sb3I7XHJcbiAgICAgICAgICAgIGRpdlR5cGUuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRpdkluZm8pO1xyXG4gICAgICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRpdlR5cGUpO1xyXG4gICAgICAgIHBhbnRhbGxhLmFwcGVuZENoaWxkKGRpdkltZyk7XHJcbiAgICAgICAgcGFudGFsbGEuYXBwZW5kQ2hpbGQoZGl2RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWdyZWdhbmRvIGl0ZW1cIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wYW50YWxsYUl0ZW0gPSBwYW50YWxsYUl0ZW07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGF0b3NQb2tlbW9uID0gdm9pZCAwO1xyXG5jbGFzcyBkYXRvc1Bva2Vtb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkID0gMTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRnVuY2lvbmVzIHBhcmEgYXVtZW50YXIgbyBkaXNtaW51aXIgZWwgdmFsb3IgZGUgaWRcclxuICAgICAqL1xyXG4gICAgc3VtT25lVG9JZCgpIHtcclxuICAgICAgICB0aGlzLmlkICs9IDE7XHJcbiAgICB9XHJcbiAgICBtaW5PbmVUb0lkKCkge1xyXG4gICAgICAgIHRoaXMuaWQgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5pZCA8IDEpXHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSAxO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRvZG8gcGFyYSBvcHRlbmVyIGVsIHBva2Vtb24gcG9yIHN1IGlkXHJcbiAgICAgKi9cclxuICAgIGdldFBva2Vtb25Gb3JJZChwYW50YWxsYSkge1xyXG4gICAgICAgIGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHt0aGlzLmlkfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9rZW1vbjtcclxuICAgICAgICAgICAgcG9rZW1vbiA9IGRhdGE7XHJcbiAgICAgICAgICAgIHBhbnRhbGxhLnNldFBva2Vtb24ocG9rZW1vbik7XHJcbiAgICAgICAgICAgIHBhbnRhbGxhLm1vc3RyYXJFblBhbnRhbGxhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmNpb24gcGFyYSBvYnRlbmVyIGVsIHBva2Vtb24gcG9yIHN1IG5vbWJyZVxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0UG9rZW1vbkZvck5hbWUobmFtZSkge1xyXG4gICAgICAgIGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtuYW1lfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9rZW1vbjtcclxuICAgICAgICAgICAgcG9rZW1vbiA9IGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kYXRvc1Bva2Vtb24gPSBkYXRvc1Bva2Vtb247XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwYW50YWxsYV8xID0gcmVxdWlyZShcIi4vcGFudGFsbGFcIik7XHJcbmxldCBwYW50YWxsYSA9IG5ldyBwYW50YWxsYV8xLnBhbnRhbGxhSXRlbSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=