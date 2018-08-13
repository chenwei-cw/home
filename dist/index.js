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
/******/ 		return __webpack_require__.p + "" + ({"all":"all"}[chunkId]||chunkId) + ".js"
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

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\nbody,\\nol,\\nul,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nth,\\ntd,\\ndl,\\ndd,\\nform,\\nfieldset,\\nlegend,\\ninput,\\ntextarea,\\nselect {\\n  margin: 0;\\n  padding: 0;\\n}\\nbody {\\n  font: 12px \\\"\\\\5B8B\\\\4F53\\\", \\\"Arial Narrow\\\", HELVETICA;\\n  background: #fff;\\n  -webkit-text-size-adjust: 100%;\\n}\\na {\\n  /* color: #2d374b; */\\n  text-decoration: none;\\n}\\na:link {\\n  text-decoration: none;\\n}\\na:visited {\\n  text-decoration: none;\\n}\\na:hover {\\n  text-decoration: none;\\n}\\na:active {\\n  text-decoration: none;\\n}\\na:focus {\\n  text-decoration: none;\\n}\\n.clearfix::after {\\n  display: block;\\n  content: '';\\n  visibility: hidden;\\n  clear: both;\\n  height: 0;\\n  _zoom: 1;\\n}\\nem {\\n  font-style: normal;\\n}\\nli {\\n  list-style: none;\\n}\\nimg {\\n  border: 0;\\n  vertical-align: middle;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\np {\\n  word-wrap: break-word;\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"\\\\5FAE\\\\8F6F\\\\96C5\\\\9ED1\\\";\\n  -webkit-overflow-scrolling: touch;\\n  box-sizing: border-box;\\n  -webkit-user-select: none;\\n  -khtml-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\ninput,\\ntextarea {\\n  -webkit-user-select: text;\\n  -khtml-user-select: text;\\n  -moz-user-select: text;\\n  -ms-user-select: text;\\n  user-select: text;\\n}\\nhtml,\\nbody,\\n#app {\\n  height: 100%;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/common/comment.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/logo/logo.less":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/js/components/logo/logo.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".logo {\\n  padding: 25px 50px;\\n}\\n.logo a {\\n  text-decoration: none;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/components/logo/logo.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/menu/menu.less":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/js/components/menu/menu.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"html,\\nbody {\\n  height: 100%;\\n  font-size: 14px;\\n  -webkit-text-size-adjust: 100%;\\n  -webkit-tap-highlight-color: transparent;\\n}\\na {\\n  color: #44a340;\\n  font-size: 14px;\\n}\\na:hover {\\n  text-decoration: none;\\n}\\n#home {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  margin: -99px 0 0 -150px;\\n  width: 300px;\\n  text-align: center;\\n}\\n#home h1 {\\n  margin: 20px 0;\\n  color: #555;\\n  font-size: 16px;\\n}\\n#home a {\\n  margin: 0 10px;\\n  font-size: 14px;\\n}\\n.avatar {\\n  margin: 0 auto;\\n  width: 120px;\\n  height: 120px;\\n  background: url(\" + escape(__webpack_require__(/*! ../../../img/avatar.png */ \"./src/img/avatar.png\")) + \") no-repeat;\\n  background: -webkit-image-set(url(\" + escape(__webpack_require__(/*! ../../../img/avatar.png */ \"./src/img/avatar.png\")) + \") 1x, url(\" + escape(__webpack_require__(/*! ../../../img/avatar@2x.png */ \"./src/img/avatar@2x.png\")) + \") 2x);\\n  border-radius: 50%;\\n}\\n#home .avatar a {\\n  display: block;\\n  margin: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: none;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/components/menu/menu.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/common/comment.less":
/*!*********************************!*\
  !*** ./src/common/comment.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!./comment.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/common/comment.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/common/comment.less?");

/***/ }),

/***/ "./src/img/avatar.png":
/*!****************************!*\
  !*** ./src/img/avatar.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./dist/images/avatar.png\";\n\n//# sourceURL=webpack:///./src/img/avatar.png?");

/***/ }),

/***/ "./src/img/avatar@2x.png":
/*!*******************************!*\
  !*** ./src/img/avatar@2x.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./dist/images/avatar@2x.png\";\n\n//# sourceURL=webpack:///./src/img/avatar@2x.png?");

/***/ }),

/***/ "./src/js/components/logo/Logo.js":
/*!****************************************!*\
  !*** ./src/js/components/logo/Logo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./logo.less */ \"./src/js/components/logo/logo.less\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Logo = function (_Component) {\n  _inherits(Logo, _Component);\n\n  function Logo() {\n    _classCallCheck(this, Logo);\n\n    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));\n  }\n\n  _createClass(Logo, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'logo' },\n        _react2.default.createElement(\n          'a',\n          { href: 'http://chenwei-cw.github.io' },\n          'chenwei-cw.github.io'\n        )\n      );\n    }\n  }]);\n\n  return Logo;\n}(_react.Component);\n\nexports.default = Logo;\n;\n\n//# sourceURL=webpack:///./src/js/components/logo/Logo.js?");

/***/ }),

/***/ "./src/js/components/logo/logo.less":
/*!******************************************!*\
  !*** ./src/js/components/logo/logo.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./logo.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/logo/logo.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/components/logo/logo.less?");

/***/ }),

/***/ "./src/js/components/menu/Menu.js":
/*!****************************************!*\
  !*** ./src/js/components/menu/Menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\n__webpack_require__(/*! ./menu.less */ \"./src/js/components/menu/menu.less\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Menu = function (_Component) {\n  _inherits(Menu, _Component);\n\n  function Menu() {\n    _classCallCheck(this, Menu);\n\n    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));\n  }\n\n  _createClass(Menu, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'home' },\n        _react2.default.createElement(\n          'div',\n          { className: 'avatar' },\n          _react2.default.createElement('a', { href: 'http://chenwei-cw.github.io' })\n        ),\n        _react2.default.createElement(\n          'h1',\n          null,\n          'cobish'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'link' },\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: 'all' },\n            '\\u5168\\u90E8'\n          ),\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: 'archive' },\n            '\\u5F52\\u6863'\n          ),\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: 'tags' },\n            '\\u6807\\u7B7E'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Menu;\n}(_react.Component);\n\n;\n\nexports.default = Menu;\n\n//# sourceURL=webpack:///./src/js/components/menu/Menu.js?");

/***/ }),

/***/ "./src/js/components/menu/menu.less":
/*!******************************************!*\
  !*** ./src/js/components/menu/menu.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./menu.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/js/components/menu/menu.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/components/menu/menu.less?");

/***/ }),

/***/ "./src/js/containers/index.js":
/*!************************************!*\
  !*** ./src/js/containers/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _main = __webpack_require__(/*! ./main/main */ \"./src/js/containers/main/main.js\");\n\nObject.defineProperty(exports, 'Main', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_main).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/js/containers/index.js?");

/***/ }),

/***/ "./src/js/containers/main/main.js":
/*!****************************************!*\
  !*** ./src/js/containers/main/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _reducers = __webpack_require__(/*! ../../reducers/reducers */ \"./src/js/reducers/reducers.js\");\n\nvar _Menu = __webpack_require__(/*! ../../components/menu/Menu */ \"./src/js/components/menu/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _Logo = __webpack_require__(/*! ../../components/logo/Logo */ \"./src/js/components/logo/Logo.js\");\n\nvar _Logo2 = _interopRequireDefault(_Logo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_Component) {\n    _inherits(Main, _Component);\n\n    function Main() {\n        _classCallCheck(this, Main);\n\n        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));\n\n        _this.state = {};\n        _this.variate = {};\n        return _this;\n    }\n\n    _createClass(Main, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {}\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _react.Fragment,\n                null,\n                _react2.default.createElement(_Logo2.default, null),\n                _react2.default.createElement(_Menu2.default, null)\n            );\n        }\n    }]);\n\n    return Main;\n}(_react.Component);\n\nvar getData = function getData(state) {\n    return {\n        issuesData: state.issuesData\n    };\n};\nvar getDispatch = function getDispatch(dispatch) {\n    return {\n        getIssuesData: function getIssuesData(mess) {\n            dispatch((0, _reducers.getIssuesData)(mess));\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(getData, getDispatch)(Main);\n\n//# sourceURL=webpack:///./src/js/containers/main/main.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _route = __webpack_require__(/*! ./route/route */ \"./src/js/route/route.js\");\n\nvar _route2 = _interopRequireDefault(_route);\n\nvar _reducers = __webpack_require__(/*! ./reducers/reducers */ \"./src/js/reducers/reducers.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\n__webpack_require__(/*! ../common/comment.less */ \"./src/common/comment.less\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _redux.createStore)(_reducers2.default);\n\n_reactDom2.default.render(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(_route2.default, null)\n), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/reducers/reducers.js":
/*!*************************************!*\
  !*** ./src/js/reducers/reducers.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : storeMess;\n    var action = arguments[1];\n\n    var newState = _extends({}, state);\n    switch (action.type) {\n        case FETCH_ISSUES:\n            newState.issuesData = action.data;\n            return _extends({}, newState);\n        default:\n            return state;\n    }\n};\n\n// action types\nvar FETCH_ISSUES = 'FETCH_ISSUES';\n\nvar storeMess = {\n    issuesData: null\n\n    // reducer\n};\n\n// action creators\nvar getIssuesData = exports.getIssuesData = function getIssuesData(data) {\n    return { type: FETCH_ISSUES, data: data };\n};\n\n//# sourceURL=webpack:///./src/js/reducers/reducers.js?");

/***/ }),

/***/ "./src/js/route/route.js":
/*!*******************************!*\
  !*** ./src/js/route/route.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../containers/index */ \"./src/js/containers/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import asyncComponent from './asyncComponent'\n\n// const All = asyncComponent('../containers/all/all.js');\n// const Article = asyncComponent('../containers/article/article.js');\n\nvar All = function All(location, cb) {\n    Promise.all(/*! require.ensure | all */[__webpack_require__.e(\"vendor\"), __webpack_require__.e(\"all\")]).then((function (require) {\n        cb(null, __webpack_require__(/*! ../containers/all/all.js */ \"./src/js/containers/all/all.js\").default);\n    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n};\n\nfunction routes() {\n    return _react2.default.createElement(\n        _reactRouterDom.HashRouter,\n        null,\n        _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _index.Main }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/all', component: All }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/article', component: Article }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/archive', component: _index.Main }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/tags', component: _index.Main })\n        )\n    );\n}\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/js/route/route.js?");

/***/ })

/******/ });