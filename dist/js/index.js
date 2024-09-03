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
        this.pokemon = new datosPokemon_1.datosPokemon();
        this.id = 1;
        this.pantalla = document.getElementById("pantalla");
        this.pokemon.getPokemonForId(this, this.id);
        console.log("en contructor");
    }
    setPokemon(poke) {
        this.pokemonActual = poke;
        if (this.pantalla.hasChildNodes()) {
            let divImg = document.getElementById('divImg');
            let divDescription = document.getElementById('description');
            this.pantalla.removeChild(divImg);
            this.pantalla.removeChild(divDescription);
        }
    }
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
        console.log("agregando item");
    }
    sumid() {
        this.id++;
        this.pokemon.getPokemonForId(this, this.id);
    }
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
let next = document.getElementById('next');
let back = document.getElementById('back');
function adelante(event) {
    pantalla.sumid();
}
function atras(event) {
    pantalla.subtractid();
}
next.addEventListener('click', adelante);
back.addEventListener('click', atras);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0EsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxtQ0FBbUM7QUFDekMsTUFBTSxzQ0FBc0M7QUFDNUMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxvQ0FBb0M7QUFDMUMsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxtQ0FBbUM7QUFDekMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSxzQ0FBc0M7QUFDNUMsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSx1Q0FBdUM7QUFDN0MsTUFBTSxvQ0FBb0M7QUFDMUMsTUFBTSxvQ0FBb0M7QUFDMUMsTUFBTSxzQ0FBc0M7QUFDNUMsTUFBTSxzQ0FBc0M7QUFDNUMsTUFBTTtBQUNOO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ3ZCSjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEIsd0JBQXdCLG1CQUFPLENBQUMscUVBQTRCO0FBQzVELHVCQUF1QixtQkFBTyxDQUFDLHVEQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QseUNBQXlDLFNBQVMsd0JBQXdCLHVDQUF1Qyx3QkFBd0I7QUFDak07QUFDQSx5REFBeUQsMkJBQTJCLG1CQUFtQiwyQkFBMkIscUJBQXFCLHNCQUFzQjtBQUM3SztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7Ozs7O0FDekRQO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELEdBQUc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxLQUFLO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7VUM5QnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMscUNBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvaW50ZXJmYWNlcy9wb2tlSW50ZXJmYWNlLnRzIiwid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvcGFudGFsbGEudHMiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy91dGlsL2RhdG9zUG9rZW1vbi50cyIsIndlYnBhY2s6Ly93b25kZXJmb29kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuY29sb3JUeXBlID0gdm9pZCAwO1xyXG5sZXQgY29sb3JUeXBlID0gW1xyXG4gICAgeyBcInRpcG9cIjogXCJzdGVlbFwiLCBcImNvbG9yXCI6IFwiIzYwQTJCOVwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcIndhdGVyXCIsIFwiY29sb3JcIjogXCIjMjQ4MUVGXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiYnVnXCIsIFwiY29sb3JcIjogXCIjOTJBMjEyXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiZHJhZ29uXCIsIFwiY29sb3JcIjogXCIjNEY2MEUyXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiZWxlY3RyaWNcIiwgXCJjb2xvclwiOiBcIiNmOWMwMDBcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJnaG9zdFwiLCBcImNvbG9yXCI6IFwiIzcwM2Y3MFwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImZpcmVcIiwgXCJjb2xvclwiOiBcIiNlNzIzMjRcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJmYWlyeVwiLCBcImNvbG9yXCI6IFwiI2VmNzBlZlwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImljZVwiLCBcImNvbG9yXCI6IFwiIzNkZDlmZlwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImZpZ2h0aW5nXCIsIFwiY29sb3JcIjogXCIjZmY4MTAwXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwibm9ybWFsXCIsIFwiY29sb3JcIjogXCIjOWZhMDlmXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwiZ3Jhc3NcIiwgXCJjb2xvclwiOiBcIiMzZGEyMjRcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJwc3ljaGljXCIsIFwiY29sb3JcIjogXCIjZWYzZjdhXCIgfSxcclxuICAgIHsgXCJ0aXBvXCI6IFwicm9ja1wiLCBcImNvbG9yXCI6IFwiI2IwYWE4MlwiIH0sXHJcbiAgICB7IFwidGlwb1wiOiBcImRhcmtcIiwgXCJjb2xvclwiOiBcIiM0ZjNmM2RcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJncm91bmRcIiwgXCJjb2xvclwiOiBcIiM5MjUwMWJcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJwb2lzb25cIiwgXCJjb2xvclwiOiBcIiM5MjNmY2NcIiB9LFxyXG4gICAgeyBcInRpcG9cIjogXCJmbHlpbmdcIiwgXCJjb2xvclwiOiBcIiM4MmI5ZWZcIiB9XHJcbl07XHJcbmV4cG9ydHMuY29sb3JUeXBlID0gY29sb3JUeXBlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnBhbnRhbGxhSXRlbSA9IHZvaWQgMDtcclxuY29uc3QgcG9rZUludGVyZmFjZV8xID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9wb2tlSW50ZXJmYWNlXCIpO1xyXG5jb25zdCBkYXRvc1Bva2Vtb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvZGF0b3NQb2tlbW9uXCIpO1xyXG5jbGFzcyBwYW50YWxsYUl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wb2tlbW9uID0gbmV3IGRhdG9zUG9rZW1vbl8xLmRhdG9zUG9rZW1vbigpO1xyXG4gICAgICAgIHRoaXMuaWQgPSAxO1xyXG4gICAgICAgIHRoaXMucGFudGFsbGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhbnRhbGxhXCIpO1xyXG4gICAgICAgIHRoaXMucG9rZW1vbi5nZXRQb2tlbW9uRm9ySWQodGhpcywgdGhpcy5pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbiBjb250cnVjdG9yXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0UG9rZW1vbihwb2tlKSB7XHJcbiAgICAgICAgdGhpcy5wb2tlbW9uQWN0dWFsID0gcG9rZTtcclxuICAgICAgICBpZiAodGhpcy5wYW50YWxsYS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgbGV0IGRpdkltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZJbWcnKTtcclxuICAgICAgICAgICAgbGV0IGRpdkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFudGFsbGEucmVtb3ZlQ2hpbGQoZGl2SW1nKTtcclxuICAgICAgICAgICAgdGhpcy5wYW50YWxsYS5yZW1vdmVDaGlsZChkaXZEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW9zdHJhckVuUGFudGFsbGEoKSB7XHJcbiAgICAgICAgbGV0IGRpdkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGRpdlR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgZGl2SW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2SW1nJyk7XHJcbiAgICAgICAgZGl2SW1nLmlubmVySFRNTCA9IGA8aW1nIGlkPVwicG9rZW1vbkltZ1wiIHNyYz1cIiR7dGhpcy5wb2tlbW9uQWN0dWFsLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cIiBhbHQ9XCIke3RoaXMucG9rZW1vbkFjdHVhbC5uYW1lfVwiIGRyYWdnYWJsZT1cImZhbHNlXCI+PHAgaWQ9XCJwb2tlTmFtZVwiPiR7dGhpcy5wb2tlbW9uQWN0dWFsLm5hbWV9PC9wPmA7XHJcbiAgICAgICAgZGl2SW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdkluZm8nKTtcclxuICAgICAgICBkaXZJbmZvLmlubmVySFRNTCA9IGA8aDE+c2l6ZXM6PC9oMT48cD5IZWlnaHQ6ICR7dGhpcy5wb2tlbW9uQWN0dWFsLmhlaWdodH0gY208L3A+PHA+d2VpZ2h0OiAke3RoaXMucG9rZW1vbkFjdHVhbC53ZWlnaHR9IGNtPC9wPiA8cD5wb2tlZGV4OiAke3RoaXMucG9rZW1vbkFjdHVhbC5pZH08L3A+YDtcclxuICAgICAgICBkaXZUeXBlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2VHlwZScpO1xyXG4gICAgICAgIGRpdlR5cGUuaW5uZXJIVE1MID0gXCI8aDE+VHlwZXM6PC9oMT5cIjtcclxuICAgICAgICBmb3IgKGxldCB0eXBlIG9mIHRoaXMucG9rZW1vbkFjdHVhbC50eXBlcykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgcC5pbm5lclRleHQgKz0gYCR7dHlwZS50eXBlLm5hbWV9YDtcclxuICAgICAgICAgICAgcC5zdHlsZS5iYWNrZ3JvdW5kID0gcG9rZUludGVyZmFjZV8xLmNvbG9yVHlwZS5maW5kKChjVHlwZSkgPT4gY1R5cGUudGlwbyA9PSB0eXBlLnR5cGUubmFtZSkuY29sb3I7XHJcbiAgICAgICAgICAgIGRpdlR5cGUuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRpdkluZm8pO1xyXG4gICAgICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRpdlR5cGUpO1xyXG4gICAgICAgIHRoaXMucGFudGFsbGEuYXBwZW5kQ2hpbGQoZGl2SW1nKTtcclxuICAgICAgICB0aGlzLnBhbnRhbGxhLmFwcGVuZENoaWxkKGRpdkRlc2NyaXB0aW9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFncmVnYW5kbyBpdGVtXCIpO1xyXG4gICAgfVxyXG4gICAgc3VtaWQoKSB7XHJcbiAgICAgICAgdGhpcy5pZCsrO1xyXG4gICAgICAgIHRoaXMucG9rZW1vbi5nZXRQb2tlbW9uRm9ySWQodGhpcywgdGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICBzdWJ0cmFjdGlkKCkge1xyXG4gICAgICAgIHRoaXMuaWQtLTtcclxuICAgICAgICBpZiAodGhpcy5pZCA8IDEpXHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSAxO1xyXG4gICAgICAgIHRoaXMucG9rZW1vbi5nZXRQb2tlbW9uRm9ySWQodGhpcywgdGhpcy5pZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wYW50YWxsYUl0ZW0gPSBwYW50YWxsYUl0ZW07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGF0b3NQb2tlbW9uID0gdm9pZCAwO1xyXG5jbGFzcyBkYXRvc1Bva2Vtb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRvZG8gcGFyYSBvcHRlbmVyIGVsIHBva2Vtb24gcG9yIHN1IGlkXHJcbiAgICAgKi9cclxuICAgIGdldFBva2Vtb25Gb3JJZChwYW50YWxsYSwgaWQpIHtcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb2tlbW9uO1xyXG4gICAgICAgICAgICBwb2tlbW9uID0gZGF0YTtcclxuICAgICAgICAgICAgcGFudGFsbGEuc2V0UG9rZW1vbihwb2tlbW9uKTtcclxuICAgICAgICAgICAgcGFudGFsbGEubW9zdHJhckVuUGFudGFsbGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRnVuY2lvbiBwYXJhIG9idGVuZXIgZWwgcG9rZW1vbiBwb3Igc3Ugbm9tYnJlXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICovXHJcbiAgICBnZXRQb2tlbW9uRm9yTmFtZShuYW1lKSB7XHJcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke25hbWV9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb2tlbW9uO1xyXG4gICAgICAgICAgICBwb2tlbW9uID0gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRhdG9zUG9rZW1vbiA9IGRhdG9zUG9rZW1vbjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhbnRhbGxhXzEgPSByZXF1aXJlKFwiLi9wYW50YWxsYVwiKTtcclxubGV0IHBhbnRhbGxhID0gbmV3IHBhbnRhbGxhXzEucGFudGFsbGFJdGVtKCk7XHJcbmxldCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxubGV0IGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjaycpO1xyXG5mdW5jdGlvbiBhZGVsYW50ZShldmVudCkge1xyXG4gICAgcGFudGFsbGEuc3VtaWQoKTtcclxufVxyXG5mdW5jdGlvbiBhdHJhcyhldmVudCkge1xyXG4gICAgcGFudGFsbGEuc3VidHJhY3RpZCgpO1xyXG59XHJcbm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGVsYW50ZSk7XHJcbmJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHJhcyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==