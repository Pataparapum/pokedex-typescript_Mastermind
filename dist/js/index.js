/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pantalla.ts":
/*!*************************!*\
  !*** ./src/pantalla.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pantallaItem = void 0;
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
        divImg.innerHTML = `<img id="pokemonImg" src="${this.pokemonActual.sprites.front_default}" alt="${this.pokemonActual.name}" draggable="false">`;
        pantalla.appendChild(divImg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLHVCQUF1QixtQkFBTyxDQUFDLHVEQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCx5Q0FBeUMsU0FBUyx3QkFBd0I7QUFDbEk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7Ozs7O0FDdEJQO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsS0FBSztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7O1VDL0NwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9wYW50YWxsYS50cyIsIndlYnBhY2s6Ly93b25kZXJmb29kLy4vc3JjL3V0aWwvZGF0b3NQb2tlbW9uLnRzIiwid2VicGFjazovL3dvbmRlcmZvb2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5wYW50YWxsYUl0ZW0gPSB2b2lkIDA7XHJcbmNvbnN0IGRhdG9zUG9rZW1vbl8xID0gcmVxdWlyZShcIi4vdXRpbC9kYXRvc1Bva2Vtb25cIik7XHJcbmNsYXNzIHBhbnRhbGxhSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBsZXQgcG9rZW1vbiA9IG5ldyBkYXRvc1Bva2Vtb25fMS5kYXRvc1Bva2Vtb24oKTtcclxuICAgICAgICBwb2tlbW9uLmdldFBva2Vtb25Gb3JJZCh0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuIGNvbnRydWN0b3JcIik7XHJcbiAgICB9XHJcbiAgICBzZXRQb2tlbW9uKHBva2UpIHtcclxuICAgICAgICB0aGlzLnBva2Vtb25BY3R1YWwgPSBwb2tlO1xyXG4gICAgfVxyXG4gICAgbW9zdHJhckVuUGFudGFsbGEoKSB7XHJcbiAgICAgICAgbGV0IHBhbnRhbGxhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYW50YWxsYVwiKTtcclxuICAgICAgICBsZXQgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGRpdkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZJbWcuaW5uZXJIVE1MID0gYDxpbWcgaWQ9XCJwb2tlbW9uSW1nXCIgc3JjPVwiJHt0aGlzLnBva2Vtb25BY3R1YWwuc3ByaXRlcy5mcm9udF9kZWZhdWx0fVwiIGFsdD1cIiR7dGhpcy5wb2tlbW9uQWN0dWFsLm5hbWV9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5gO1xyXG4gICAgICAgIHBhbnRhbGxhLmFwcGVuZENoaWxkKGRpdkltZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZ3JlZ2FuZG8gaXRlbVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnBhbnRhbGxhSXRlbSA9IHBhbnRhbGxhSXRlbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kYXRvc1Bva2Vtb24gPSB2b2lkIDA7XHJcbmNsYXNzIGRhdG9zUG9rZW1vbiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSAxO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jaW9uZXMgcGFyYSBhdW1lbnRhciBvIGRpc21pbnVpciBlbCB2YWxvciBkZSBpZFxyXG4gICAgICovXHJcbiAgICBzdW1PbmVUb0lkKCkge1xyXG4gICAgICAgIHRoaXMuaWQgKz0gMTtcclxuICAgIH1cclxuICAgIG1pbk9uZVRvSWQoKSB7XHJcbiAgICAgICAgdGhpcy5pZCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmlkIDwgMSlcclxuICAgICAgICAgICAgdGhpcy5pZCA9IDE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE1ldG9kbyBwYXJhIG9wdGVuZXIgZWwgcG9rZW1vbiBwb3Igc3UgaWRcclxuICAgICAqL1xyXG4gICAgZ2V0UG9rZW1vbkZvcklkKHBhbnRhbGxhKSB7XHJcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3RoaXMuaWR9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb2tlbW9uO1xyXG4gICAgICAgICAgICBwb2tlbW9uID0gZGF0YTtcclxuICAgICAgICAgICAgcGFudGFsbGEuc2V0UG9rZW1vbihwb2tlbW9uKTtcclxuICAgICAgICAgICAgcGFudGFsbGEubW9zdHJhckVuUGFudGFsbGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRnVuY2lvbiBwYXJhIG9idGVuZXIgZWwgcG9rZW1vbiBwb3Igc3Ugbm9tYnJlXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICovXHJcbiAgICBnZXRQb2tlbW9uRm9yTmFtZShuYW1lKSB7XHJcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke25hbWV9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb2tlbW9uO1xyXG4gICAgICAgICAgICBwb2tlbW9uID0gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRhdG9zUG9rZW1vbiA9IGRhdG9zUG9rZW1vbjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhbnRhbGxhXzEgPSByZXF1aXJlKFwiLi9wYW50YWxsYVwiKTtcclxubGV0IHBhbnRhbGxhID0gbmV3IHBhbnRhbGxhXzEucGFudGFsbGFJdGVtKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==