module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ \"./redux/actions.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/mz/WebstormProjects/ShenasaMelk/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst H1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1.withConfig({\n  displayName: \"pages__H1\",\n  componentId: \"z7kkzv-0\"\n})([\"color:red;\"]);\n\nconst Index = () => {\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__[\"startClock\"])());\n  }, [dispatch]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(H1, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"hi\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkgxIiwic3R5bGUiLCJoMSIsIkluZGV4IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInN0YXJ0Q2xvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsRUFBRSxHQUFHQyx3REFBSyxDQUFDQyxFQUFUO0FBQUE7QUFBQTtBQUFBLGtCQUFSOztBQUlBLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLFlBQVEsQ0FBQ0csaUVBQVUsRUFBWCxDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNILFFBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRSxtRUFDSSxNQUFDLEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBREY7QUFLRCxDQVhEOztBQWFlRCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzdGFydENsb2NrIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBzdHlsZSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEgxID0gc3R5bGUuaDFgXG4gICAgY29sb3I6IHJlZDtcbmA7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzdGFydENsb2NrKCkpXG4gIH0sIFtkaXNwYXRjaF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8SDE+aGk8L0gxPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: serverRenderClock, startClock, incrementCount, decrementCount, resetCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serverRenderClock\", function() { return serverRenderClock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startClock\", function() { return startClock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementCount\", function() { return incrementCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decrementCount\", function() { return decrementCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetCount\", function() { return resetCount; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./redux/types.js\");\n // INITIALIZES CLOCK ON SERVER\n\nconst serverRenderClock = () => dispatch => dispatch({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"TICK\"],\n  payload: {\n    light: false,\n    ts: Date.now()\n  }\n}); // INITIALIZES CLOCK ON CLIENT\n\nconst startClock = () => dispatch => setInterval(() => {\n  dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"TICK\"],\n    payload: {\n      light: true,\n      ts: Date.now()\n    }\n  });\n}, 1000); // INCREMENT COUNTER BY 1\n\nconst incrementCount = () => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"INCREMENT\"]\n}); // DECREMENT COUNTER BY 1\n\nconst decrementCount = () => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"DECREMENT\"]\n}); // RESET COUNTER\n\nconst resetCount = () => ({\n  type: _types__WEBPACK_IMPORTED_MODULE_0__[\"RESET\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zLmpzPzY2OTAiXSwibmFtZXMiOlsic2VydmVyUmVuZGVyQ2xvY2siLCJkaXNwYXRjaCIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJsaWdodCIsInRzIiwiRGF0ZSIsIm5vdyIsInN0YXJ0Q2xvY2siLCJzZXRJbnRlcnZhbCIsImluY3JlbWVudENvdW50IiwiSU5DUkVNRU5UIiwiZGVjcmVtZW50Q291bnQiLCJERUNSRU1FTlQiLCJyZXNldENvdW50IiwiUkVTRVQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ08sTUFBTUEsaUJBQWlCLEdBQUcsTUFBT0MsUUFBRCxJQUNyQ0EsUUFBUSxDQUFDO0FBQ1BDLE1BQUksRUFBRUMsMkNBREM7QUFFUEMsU0FBTyxFQUFFO0FBQUVDLFNBQUssRUFBRSxLQUFUO0FBQWdCQyxNQUFFLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQUFwQjtBQUZGLENBQUQsQ0FESCxDLENBTVA7O0FBQ08sTUFBTUMsVUFBVSxHQUFHLE1BQU9SLFFBQUQsSUFDOUJTLFdBQVcsQ0FBQyxNQUFNO0FBQ2hCVCxVQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFQywyQ0FBUjtBQUFvQkMsV0FBTyxFQUFFO0FBQUVDLFdBQUssRUFBRSxJQUFUO0FBQWVDLFFBQUUsRUFBRUMsSUFBSSxDQUFDQyxHQUFMO0FBQW5CO0FBQTdCLEdBQUQsQ0FBUjtBQUNELENBRlUsRUFFUixJQUZRLENBRE4sQyxDQUtQOztBQUNPLE1BQU1HLGNBQWMsR0FBRyxPQUFPO0FBQUVULE1BQUksRUFBRUMsZ0RBQWVTO0FBQXZCLENBQVAsQ0FBdkIsQyxDQUVQOztBQUNPLE1BQU1DLGNBQWMsR0FBRyxPQUFPO0FBQUVYLE1BQUksRUFBRUMsZ0RBQWVXO0FBQXZCLENBQVAsQ0FBdkIsQyxDQUVQOztBQUNPLE1BQU1DLFVBQVUsR0FBRyxPQUFPO0FBQUViLE1BQUksRUFBRUMsNENBQVdhO0FBQW5CLENBQVAsQ0FBbkIiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcblxuLy8gSU5JVElBTElaRVMgQ0xPQ0sgT04gU0VSVkVSXG5leHBvcnQgY29uc3Qgc2VydmVyUmVuZGVyQ2xvY2sgPSAoKSA9PiAoZGlzcGF0Y2gpID0+XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiB0eXBlcy5USUNLLFxuICAgIHBheWxvYWQ6IHsgbGlnaHQ6IGZhbHNlLCB0czogRGF0ZS5ub3coKSB9LFxuICB9KVxuXG4vLyBJTklUSUFMSVpFUyBDTE9DSyBPTiBDTElFTlRcbmV4cG9ydCBjb25zdCBzdGFydENsb2NrID0gKCkgPT4gKGRpc3BhdGNoKSA9PlxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5USUNLLCBwYXlsb2FkOiB7IGxpZ2h0OiB0cnVlLCB0czogRGF0ZS5ub3coKSB9IH0pXG4gIH0sIDEwMDApXG5cbi8vIElOQ1JFTUVOVCBDT1VOVEVSIEJZIDFcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRDb3VudCA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLklOQ1JFTUVOVCB9KVxuXG4vLyBERUNSRU1FTlQgQ09VTlRFUiBCWSAxXG5leHBvcnQgY29uc3QgZGVjcmVtZW50Q291bnQgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5ERUNSRU1FTlQgfSlcblxuLy8gUkVTRVQgQ09VTlRFUlxuZXhwb3J0IGNvbnN0IHJlc2V0Q291bnQgPSAoKSA9PiAoeyB0eXBlOiB0eXBlcy5SRVNFVCB9KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actions.js\n");

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: TICK, INCREMENT, DECREMENT, RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TICK\", function() { return TICK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCREMENT\", function() { return INCREMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DECREMENT\", function() { return DECREMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESET\", function() { return RESET; });\n// REDUX ACTION TYPES\nconst TICK = 'TICK';\nconst INCREMENT = 'INCREMENT';\nconst DECREMENT = 'DECREMENT';\nconst RESET = 'RESET';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC90eXBlcy5qcz9mNmVjIl0sIm5hbWVzIjpbIlRJQ0siLCJJTkNSRU1FTlQiLCJERUNSRU1FTlQiLCJSRVNFVCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTUEsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsT0FBZCIsImZpbGUiOiIuL3JlZHV4L3R5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUkVEVVggQUNUSU9OIFRZUEVTXG5leHBvcnQgY29uc3QgVElDSyA9ICdUSUNLJ1xuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVCA9ICdJTkNSRU1FTlQnXG5leHBvcnQgY29uc3QgREVDUkVNRU5UID0gJ0RFQ1JFTUVOVCdcbmV4cG9ydCBjb25zdCBSRVNFVCA9ICdSRVNFVCdcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/types.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });