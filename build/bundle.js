/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_Searchbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_Sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _components_Page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);





class App extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template() {
    return `
    <div id="wrapper">
      <nav data-component="sidebar"></nav> 
      <div id="content">
        <div data-component="searchbar" id="searchbar"></div>
        <div data-component="page" id="page"></div>
      </div>
    </div>
    `;
  }
  mounted() {
    const $sidebar = this.$target.querySelector('[data-component="sidebar"]');
    const $searchbar = this.$target.querySelector('[data-component="searchbar"]');
    const $page = this.$target.querySelector('[data-component="page"]');

    new _components_Sidebar_js__WEBPACK_IMPORTED_MODULE_2__["default"]($sidebar, {});
    new _components_Searchbar_js__WEBPACK_IMPORTED_MODULE_1__["default"]($searchbar, {});
    new _components_Page_js__WEBPACK_IMPORTED_MODULE_3__["default"]($page, {});
  }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
class Component {
  $target;
  $props;
  $state;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {

  }
  mounted() {

  }
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {

  }
  setState(newState) {
    this.$state = {
      ...this.$state,
      ...newState
    };
    this.render();
  }
  addEvent(eventType, selector, callback) {
    const children = [ ...this.$target.querySelectorAll(selector) ];

    const isTarget = (target) => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) {
        return false;
      }
      callback(event);
    })
  }
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Searchbar)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Searchbar extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template() {
    return `
      <div id="searchbar-button">
       <img id="searchbar-icon" src="src/img/magnifying-glass-solid.svg">
      </div>
    `;
  }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Sidebar extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template() {
    return `
      <div id="sidebar-header">
        <img id="sidebar-profile-img" src="src/img/profile.png"> 
        <div id="sidebar-profile-name">
          고태진
        </div>
        <div id="sidebar-profile-intro">
          개발자
        </div>
      </div>
      <hr color="#eeeeee">
      <div id="sidebar-nav">
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/house-solid.svg">
          Home
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/pen-to-square-solid.svg">
          Blog
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/box-archive-solid.svg">
          Archieve
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/gear-solid.svg">
          Projects
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/link-solid.svg">
          Links
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/user-solid.svg">
          About
        </div>
      </div>
      <div id="sidebar-link">
        <div id="sidebar-link-header">
         Contact 
        </div>
        <div id="sidebar-link-item">
          <img class="sidebar-link-icon" src="src/img/github-brands.svg">
        </div>
        <div id="sidebar-link-item">
          <img class="sidebar-link-icon" src="src/img/linkedin-in-brands.svg">
        </div>
      </div>
      <div id="sidebar-mod">
        <img id="sidebar-mod-icon" src="src/img/moon-solid.svg">
      </div>
    `;
  }
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _pages_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



class Page extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template() {
    return `
      <div data-component="home" id="home"></div>
    `;
  }
  
  mounted() {
    const $home = this.$target.querySelector('[data-component="home"]');

    new _pages_Home_js__WEBPACK_IMPORTED_MODULE_1__["default"]($home, {});
  }
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



class Home extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template() {
    return `
      <div data-component="intro-card"></div>
    `;
  }

  mounted() {
    const $intro_card = this.$target.querySelector('[data-component="intro-card"]');

    new _Card_js__WEBPACK_IMPORTED_MODULE_1__["default"]($intro_card, {
      width: "100%",
      height: "300px",
      content: ""
    });
  }
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Card extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template() {
    return `
      <div class="card" style="width:${this.$props.width}; height:${this.$props.height};">
        ${this.$props.content}
      </div>
    `;
  }
}

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


new _App_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('#app'));
})();

/******/ })()
;