/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"all":"all","article":"article"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/common/comment.less":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/common/comment.less ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nbody,\nol,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nth,\ntd,\ndl,\ndd,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nselect {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font: 12px \"\\5B8B\\4F53\", \"Arial Narrow\", HELVETICA;\n  background: #fff;\n  -webkit-text-size-adjust: 100%;\n}\na {\n  /* color: #2d374b; */\n  text-decoration: none;\n}\na:link {\n  text-decoration: none;\n}\na:visited {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: none;\n}\na:active {\n  text-decoration: none;\n}\na:focus {\n  text-decoration: none;\n}\n.clearfix::after {\n  display: block;\n  content: '';\n  visibility: hidden;\n  clear: both;\n  height: 0;\n  _zoom: 1;\n}\nem {\n  font-style: normal;\n}\nli {\n  list-style: none;\n}\nimg {\n  border: 0;\n  vertical-align: middle;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\np {\n  word-wrap: break-word;\n}\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n  -webkit-overflow-scrolling: touch;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\ninput,\ntextarea {\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\nhtml,\nbody,\n#app {\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/logo/logo.less":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/js/components/logo/logo.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  padding: 25px 50px;\n}\n.logo a {\n  text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/menu/menu.less":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/js/components/menu/menu.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  height: 100%;\n  font-size: 14px;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\na {\n  color: #44a340;\n  font-size: 14px;\n}\na:hover {\n  text-decoration: none;\n}\n#home {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin: -99px 0 0 -150px;\n  width: 300px;\n  text-align: center;\n}\n#home h1 {\n  margin: 20px 0;\n  color: #555;\n  font-size: 16px;\n}\n#home a {\n  margin: 0 10px;\n  font-size: 14px;\n}\n.avatar {\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  background: url(" + escape(__webpack_require__(/*! ../../../img/avatar.png */ "./src/img/avatar.png")) + ") no-repeat;\n  background: -webkit-image-set(url(" + escape(__webpack_require__(/*! ../../../img/avatar.png */ "./src/img/avatar.png")) + ") 1x, url(" + escape(__webpack_require__(/*! ../../../img/avatar@2x.png */ "./src/img/avatar@2x.png")) + ") 2x);\n  border-radius: 50%;\n}\n#home .avatar a {\n  display: block;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  background: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/common/comment.less":
/*!*********************************!*\
  !*** ./src/common/comment.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!./comment.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/common/comment.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/img/avatar.png":
/*!****************************!*\
  !*** ./src/img/avatar.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./dist/images/avatar.png";

/***/ }),

/***/ "./src/img/avatar@2x.png":
/*!*******************************!*\
  !*** ./src/img/avatar@2x.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./dist/images/avatar@2x.png";

/***/ }),

/***/ "./src/js/components/logo/Logo.js":
/*!****************************************!*\
  !*** ./src/js/components/logo/Logo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./logo.less */ "./src/js/components/logo/logo.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_Component) {
  _inherits(Logo, _Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'logo' },
        _react2.default.createElement(
          'a',
          { href: 'http://chenwei-cw.github.io' },
          'chenwei-cw.github.io'
        )
      );
    }
  }]);

  return Logo;
}(_react.Component);

exports.default = Logo;
;

/***/ }),

/***/ "./src/js/components/logo/logo.less":
/*!******************************************!*\
  !*** ./src/js/components/logo/logo.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./logo.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/logo/logo.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/components/menu/Menu.js":
/*!****************************************!*\
  !*** ./src/js/components/menu/Menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

__webpack_require__(/*! ./menu.less */ "./src/js/components/menu/menu.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'avatar' },
          _react2.default.createElement('a', { href: 'http://chenwei-cw.github.io' })
        ),
        _react2.default.createElement(
          'h1',
          null,
          'cobish'
        ),
        _react2.default.createElement(
          'div',
          { className: 'link' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: 'all' },
            '\u5168\u90E8'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: 'archive' },
            '\u5F52\u6863'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: 'tags' },
            '\u6807\u7B7E'
          )
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

;

exports.default = Menu;

/***/ }),

/***/ "./src/js/components/menu/menu.less":
/*!******************************************!*\
  !*** ./src/js/components/menu/menu.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./menu.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/menu/menu.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/containers/main/main.js":
/*!****************************************!*\
  !*** ./src/js/containers/main/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reducers = __webpack_require__(/*! ../../reducers/reducers */ "./src/js/reducers/reducers.js");

var _Menu = __webpack_require__(/*! ../../components/menu/Menu */ "./src/js/components/menu/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _Logo = __webpack_require__(/*! ../../components/logo/Logo */ "./src/js/components/logo/Logo.js");

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

        _this.state = {};
        _this.variate = {};
        return _this;
    }

    _createClass(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(_Logo2.default, null),
                _react2.default.createElement(_Menu2.default, null)
            );
        }
    }]);

    return Main;
}(_react.Component);

var getData = function getData(state) {
    return {
        issuesData: state.issuesData
    };
};
var getDispatch = function getDispatch(dispatch) {
    return {
        getIssuesData: function getIssuesData(mess) {
            dispatch((0, _reducers.getIssuesData)(mess));
        }
    };
};

exports.default = (0, _reactRedux.connect)(getData, getDispatch)(Main);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _route = __webpack_require__(/*! ./route/route */ "./src/js/route/route.js");

var _route2 = _interopRequireDefault(_route);

var _reducers = __webpack_require__(/*! ./reducers/reducers */ "./src/js/reducers/reducers.js");

var _reducers2 = _interopRequireDefault(_reducers);

__webpack_require__(/*! ../common/comment.less */ "./src/common/comment.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_route2.default, null)
), document.getElementById('app'));

/***/ }),

/***/ "./src/js/reducers/reducers.js":
/*!*************************************!*\
  !*** ./src/js/reducers/reducers.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : storeMess;
    var action = arguments[1];

    var newState = _extends({}, state);
    switch (action.type) {
        case FETCH_ISSUES:
            newState.issuesData = action.data;
            return _extends({}, newState);
        default:
            return state;
    }
};

// action types
var FETCH_ISSUES = 'FETCH_ISSUES';

var storeMess = {
    issuesData: null

    // reducer
};

// action creators
var getIssuesData = exports.getIssuesData = function getIssuesData(data) {
    return { type: FETCH_ISSUES, data: data };
};

/***/ }),

/***/ "./src/js/route/asyncComponent.js":
/*!****************************************!*\
  !*** ./src/js/route/asyncComponent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = asyncComponent;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function asyncComponent(importComponent) {
  var AsyncComponent = function (_Component) {
    _inherits(AsyncComponent, _Component);

    function AsyncComponent(props) {
      _classCallCheck(this, AsyncComponent);

      var _this = _possibleConstructorReturn(this, (AsyncComponent.__proto__ || Object.getPrototypeOf(AsyncComponent)).call(this, props));

      _this.state = {
        component: null
      };
      return _this;
    }

    _createClass(AsyncComponent, [{
      key: "componentDidMount",
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _ref2, component;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return importComponent();

                case 2:
                  _ref2 = _context.sent;
                  component = _ref2.default;


                  this.setState({
                    component: component
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function componentDidMount() {
          return _ref.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "render",
      value: function render() {
        var C = this.state.component;

        return C ? _react2.default.createElement(C, this.props) : null;
      }
    }]);

    return AsyncComponent;
  }(_react.Component);

  return AsyncComponent;
}

/***/ }),

/***/ "./src/js/route/route.js":
/*!*******************************!*\
  !*** ./src/js/route/route.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _main = __webpack_require__(/*! ../containers/main/main */ "./src/js/containers/main/main.js");

var _main2 = _interopRequireDefault(_main);

var _asyncComponent = __webpack_require__(/*! ./asyncComponent */ "./src/js/route/asyncComponent.js");

var _asyncComponent2 = _interopRequireDefault(_asyncComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var All = (0, _asyncComponent2.default)(function () {
    return Promise.all(/*! import() | all */[__webpack_require__.e("vendor"), __webpack_require__.e("all")]).then(__webpack_require__.t.bind(null, /*! ../containers/all/all */ "./src/js/containers/all/all.js", 7));
});
var Article = (0, _asyncComponent2.default)(function () {
    return Promise.all(/*! import() | article */[__webpack_require__.e("vendor"), __webpack_require__.e("article")]).then(__webpack_require__.t.bind(null, /*! ../containers/article/article */ "./src/js/containers/article/article.js", 7));
});

function routes() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _main2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/all', component: All }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/article', component: Article }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/archive', component: _main2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/tags', component: _main2.default })
        )
    );
}

exports.default = routes;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21tZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9nby9sb2dvLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS9tZW51Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21tZW50Lmxlc3M/NDY3YiIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2F2YXRhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9hdmF0YXJAMngucG5nIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xvZ28vTG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9sb2dvL2xvZ28ubGVzcz80MTE5Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZW51L21lbnUubGVzcz80NDQ2Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb250YWluZXJzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yb3V0ZS9hc3luY0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcm91dGUvcm91dGUuanMiXSwibmFtZXMiOlsiTG9nbyIsIkNvbXBvbmVudCIsIk1lbnUiLCJNYWluIiwic3RhdGUiLCJ2YXJpYXRlIiwiZ2V0RGF0YSIsImlzc3Vlc0RhdGEiLCJnZXREaXNwYXRjaCIsImRpc3BhdGNoIiwiZ2V0SXNzdWVzRGF0YSIsIm1lc3MiLCJzdG9yZSIsImVudHJlcG90IiwiUmVhY3REb20iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RvcmVNZXNzIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJ0eXBlIiwiRkVUQ0hfSVNTVUVTIiwiZGF0YSIsImFzeW5jQ29tcG9uZW50IiwiaW1wb3J0Q29tcG9uZW50IiwiQXN5bmNDb21wb25lbnQiLCJwcm9wcyIsImNvbXBvbmVudCIsImRlZmF1bHQiLCJzZXRTdGF0ZSIsIkMiLCJBbGwiLCJBcnRpY2xlIiwicm91dGVzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpREFBeUMsZ0NBQWdDO0FBQ3pFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSx5Q0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUQsSUFBTyxNQUFLLFVBQVosRUFBdUIsV0FBV0MsT0FBbEMsR0FISjtBQUlJLDBDQUFDLHFCQUFELElBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVc5QixjQUFsQyxHQUpKO0FBS0ksMENBQUMscUJBQUQsSUFBTyxNQUFLLE9BQVosRUFBb0IsV0FBV0EsY0FBL0I7QUFMSjtBQURKLEtBREo7QUFXSDs7a0JBSWMrQixNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJpbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcImFsbFwiOlwiYWxsXCIsXCJhcnRpY2xlXCI6XCJhcnRpY2xlXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvanMvaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5ib2R5LFxcbm9sLFxcbnVsLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxudGgsXFxudGQsXFxuZGwsXFxuZGQsXFxuZm9ybSxcXG5maWVsZHNldCxcXG5sZWdlbmQsXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgZm9udDogMTJweCBcXFwiXFxcXDVCOEJcXFxcNEY1M1xcXCIsIFxcXCJBcmlhbCBOYXJyb3dcXFwiLCBIRUxWRVRJQ0E7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbn1cXG5hIHtcXG4gIC8qIGNvbG9yOiAjMmQzNzRiOyAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmNsZWFyZml4OjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBoZWlnaHQ6IDA7XFxuICBfem9vbTogMTtcXG59XFxuZW0ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5wIHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJcXFxcNUZBRVxcXFw4RjZGXFxcXDk2QzVcXFxcOUVEMVxcXCI7XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XFxuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XFxuICB1c2VyLXNlbGVjdDogdGV4dDtcXG59XFxuaHRtbCxcXG5ib2R5LFxcbiNhcHAge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sb2dvIHtcXG4gIHBhZGRpbmc6IDI1cHggNTBweDtcXG59XFxuLmxvZ28gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5hIHtcXG4gIGNvbG9yOiAjNDRhMzQwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuI2hvbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW46IC05OXB4IDAgMCAtMTUwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNob21lIGgxIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgY29sb3I6ICM1NTU7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNob21lIGEge1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5hdmF0YXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvYXZhdGFyLnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1pbWFnZS1zZXQodXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvYXZhdGFyLnBuZ1wiKSkgKyBcIikgMXgsIHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vaW1nL2F2YXRhckAyeC5wbmdcIikpICsgXCIpIDJ4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuI2hvbWUgLmF2YXRhciBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbWVudC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50Lmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Rpc3QvaW1hZ2VzL2F2YXRhci5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Rpc3QvaW1hZ2VzL2F2YXRhckAyeC5wbmdcIjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2xvZ28ubGVzcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ28gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICA8YSBocmVmPSdodHRwOi8vY2hlbndlaS1jdy5naXRodWIuaW8nPmNoZW53ZWktY3cuZ2l0aHViLmlvPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9nby5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dvLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dvLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgJy4vbWVudS5sZXNzJ1xuY2xhc3MgTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImhvbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2NoZW53ZWktY3cuZ2l0aHViLmlvXCI+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxPmNvYmlzaDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiYWxsXCI+5YWo6YOoPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiYXJjaGl2ZVwiPuW9kuahozwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cInRhZ3NcIj7moIfnrb48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51Lmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3Qse0ZyYWdtZW50LENvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2dldElzc3Vlc0RhdGF9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3JlZHVjZXJzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZW51L01lbnUnXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvZ28vTG9nbydcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBnZXREYXRhID0gKHN0YXRlKSA9PntcbiAgICByZXR1cm4ge1xuICAgICAgICBpc3N1ZXNEYXRhOnN0YXRlLmlzc3Vlc0RhdGFcbiAgICB9XG59XG5jb25zdCBnZXREaXNwYXRjaCA9IChkaXNwYXRjaCkgPT57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SXNzdWVzRGF0YToobWVzcyk9PntcbiAgICAgICAgICAgIGRpc3BhdGNoKGdldElzc3Vlc0RhdGEobWVzcykpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoZ2V0RGF0YSxnZXREaXNwYXRjaCkoTWFpbikgIiwiaW1wb3J0IFJlYWN0LHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUm91dGUgZnJvbSAnLi9yb3V0ZS9yb3V0ZSdcbmltcG9ydCBlbnRyZXBvdCBmcm9tICcuL3JlZHVjZXJzL3JlZHVjZXJzJ1xuaW1wb3J0ICcuLi9jb21tb24vY29tbWVudC5sZXNzJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGVudHJlcG90KTtcblxuUmVhY3REb20ucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Um91dGUvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKSIsIi8vIGFjdGlvbiB0eXBlc1xuY29uc3QgRkVUQ0hfSVNTVUVTID0gJ0ZFVENIX0lTU1VFUyc7XG5cbmNvbnN0IHN0b3JlTWVzcyA9IHtcbiAgICBpc3N1ZXNEYXRhOm51bGxcbn1cblxuLy8gcmVkdWNlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gc3RvcmVNZXNzLCBhY3Rpb24pIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB7Li4uc3RhdGV9O1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBGRVRDSF9JU1NVRVM6XG4gICAgICAgICAgICBuZXdTdGF0ZS5pc3N1ZXNEYXRhID0gYWN0aW9uLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gey4uLm5ld1N0YXRlfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG4vLyBhY3Rpb24gY3JlYXRvcnNcbmV4cG9ydCBjb25zdCBnZXRJc3N1ZXNEYXRhPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiB7IHR5cGU6IEZFVENIX0lTU1VFUywgZGF0YSB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3luY0NvbXBvbmVudChpbXBvcnRDb21wb25lbnQpIHtcbiAgY2xhc3MgQXN5bmNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGNvbXBvbmVudDogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgZGVmYXVsdDogY29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnRDb21wb25lbnQoKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBDID0gdGhpcy5zdGF0ZS5jb21wb25lbnQ7XG5cbiAgICAgIHJldHVybiBDID8gPEMgey4uLnRoaXMucHJvcHN9IC8+IDogbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQXN5bmNDb21wb25lbnQ7XG59IiwiaW1wb3J0IFJlYWN0LHtGcmFnbWVudCxDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvbWFpbi9tYWluJ1xuaW1wb3J0IGFzeW5jQ29tcG9uZW50IGZyb20gJy4vYXN5bmNDb21wb25lbnQnXG5cbmNvbnN0IEFsbCA9IGFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFsbFwiICovXCIuLi9jb250YWluZXJzL2FsbC9hbGxcIikpO1xuY29uc3QgQXJ0aWNsZSA9IGFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFydGljbGVcIiAqL1wiLi4vY29udGFpbmVycy9hcnRpY2xlL2FydGljbGVcIikpO1xuXG5mdW5jdGlvbiByb3V0ZXMoKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hbGxcIiBjb21wb25lbnQ9e0FsbH0gLz4gXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXJ0aWNsZVwiIGNvbXBvbmVudD17QXJ0aWNsZX0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcmNoaXZlXCIgY29tcG9uZW50PXtNYWlufSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3RhZ3NcIiBjb21wb25lbnQ9e01haW59IC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICA8L1JvdXRlcj5cbiAgICApXG59XG5cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcyJdLCJzb3VyY2VSb290IjoiIn0=