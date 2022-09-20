/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _favicon_32x32_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favicon-32x32.png */ \"./src/favicon-32x32.png\");\n/* harmony import */ var _caret_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caret.png */ \"./src/caret.png\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_caret_png__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 100vh;\\n  margin: 0;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\n.container {\\n  display: grid;\\n  height: 100vh;\\n  grid-template: 5em 1fr/20em 1fr;\\n  grid-template-areas: \\\"header header\\\" \\\"sidebar content\\\";\\n}\\n.container .header {\\n  grid-area: header;\\n  background-color: #264653;\\n  padding: 1em;\\n}\\n.container .header h1 {\\n  margin: 0;\\n  color: white;\\n}\\n.container .sidebar {\\n  grid-area: sidebar;\\n  background-color: #e1e1e1;\\n  padding: 1em;\\n  user-select: none;\\n}\\n.container .sidebar .projects-header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 0em 1em;\\n}\\n.container .sidebar .projects-header h2 {\\n  width: fit-content;\\n  margin: 0.5em 0em 0.5em 0em;\\n}\\n.container .sidebar .projects-header button {\\n  height: 2.9em;\\n  width: 2.9em;\\n  background: none;\\n  border: none;\\n  cursor: pointer;\\n}\\n.container .sidebar .projects {\\n  height: 20em;\\n  overflow-y: auto;\\n}\\n.container .sidebar ul {\\n  padding-left: 1em;\\n  position: relative;\\n  width: max-content;\\n  margin: 0;\\n}\\n.container .sidebar .project-name {\\n  list-style: none;\\n  margin: 0;\\n  padding: 4px 0 4px 20px;\\n  font-weight: 600;\\n  cursor: pointer;\\n}\\n.container .sidebar .project-name.expanded::before {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat 0em/0.6em;\\n  content: \\\"\\\";\\n  width: 1em;\\n  height: 1em;\\n  position: absolute;\\n  left: 1.1em;\\n  top: 0.6em;\\n  transform: rotate(90deg);\\n}\\n.container .sidebar .project-name.unexpanded::before {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat 0em/0.6em;\\n  content: \\\"\\\";\\n  width: 1em;\\n  height: 1em;\\n  position: absolute;\\n  left: 1.3em;\\n  top: 0.4em;\\n}\\n.container .sidebar .task-name {\\n  list-style: none;\\n  padding-left: 2em;\\n}\\n.container .content {\\n  grid-area: content;\\n  background-color: #f6f6f6;\\n  padding: 1em;\\n}\\n.container .content button {\\n  background: none;\\n  border: none;\\n  height: 4em;\\n  width: 4em;\\n  filter: invert(19%) sepia(5%) saturate(5450%) hue-rotate(152deg) brightness(96%) contrast(79%);\\n  cursor: pointer;\\n}\\n.container .priority1 {\\n  color: red;\\n}\\n.container .priority2 {\\n  color: orange;\\n}\\n.container .priority3 {\\n  color: green;\\n}\\n.container form {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: #c8c8c8;\\n  color: rgb(18, 18, 18);\\n  flex-direction: column;\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\n  padding: 2em;\\n  width: 25em;\\n  display: none;\\n}\\n.container form h2 {\\n  margin-top: 0;\\n}\\n.container form #desc input {\\n  height: 7em;\\n}\\n.container form .input-box > * {\\n  display: block;\\n}\\n.container form .input-box > input {\\n  width: 100%;\\n  box-sizing: border-box;\\n  margin: 0.4em 0px;\\n  height: 1.8em;\\n  padding: 0.8em;\\n  border-radius: 0px;\\n  border: rgb(70, 70, 70) solid 1px;\\n  font-family: inherit;\\n  font-size: 1em;\\n}\\n.container form select {\\n  font-family: inherit;\\n  font-size: 1em;\\n  margin: 0.4em 0px;\\n}\\n.container form textarea {\\n  height: 10em;\\n  width: 100%;\\n  box-sizing: border-box;\\n  resize: vertical;\\n  min-height: 10em;\\n  padding: 0.8em;\\n  font-family: inherit;\\n  font-size: 1em;\\n  max-height: 20em;\\n  margin: 0.4em 0px;\\n}\\n.container form .input-box > input:focus-visible {\\n  outline: none;\\n  box-shadow: 0px 0px 2px #000000;\\n}\\n.container form .input-box > input:invalid {\\n  border: #db0000 solid 2px;\\n  border-radius: 0px;\\n}\\n.container form .input-box > label {\\n  font-size: 1em;\\n  font-weight: 600;\\n}\\n.container form .input-box > p.error {\\n  margin: 0px;\\n  color: #db0000;\\n}\\n.container form #submit-box {\\n  display: flex;\\n  gap: 1em;\\n  justify-content: flex-end;\\n}\\n.container form #submit-box button {\\n  padding: 0.5em 1em;\\n  text-align: center;\\n  text-decoration: none;\\n  display: inline;\\n  font-size: 1em;\\n  margin-top: 1em;\\n}\\n.container form #submit-box button.create {\\n  background-color: #264653;\\n  border: none;\\n  color: white;\\n}\\n.container form #submit-box button.create:hover {\\n  background-color: #446d7c;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.ts":
/*!************************!*\
  !*** ./src/display.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask),\n/* harmony export */   \"selectProject\": () => (/* binding */ selectProject),\n/* harmony export */   \"selectedProject\": () => (/* binding */ selectedProject)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.ts\");\n\r\n\r\nvar selectedProject = 0;\r\n// displays a task in the content area of the DOM\r\nfunction displayTask(task) {\r\n    var taskDiv = document.createElement(\"div\");\r\n    taskDiv.classList.add(\"task\");\r\n    var taskTitle = document.createElement(\"h1\");\r\n    taskTitle.innerText = task.title;\r\n    var taskDesc = document.createElement(\"p\");\r\n    taskDesc.innerText = task.description;\r\n    var dueDate = document.createElement(\"p\");\r\n    dueDate.innerText = \"due on: \".concat(task.due);\r\n    var color = \"priority\".concat(task.priority);\r\n    taskTitle.classList.add(color);\r\n    taskDiv.appendChild(taskTitle);\r\n    taskDiv.appendChild(taskDesc);\r\n    taskDiv.appendChild(dueDate);\r\n    document.querySelector(\".content\").appendChild(taskDiv);\r\n}\r\n//togglable button to view a project's tasks on sidebar\r\nwindow.expandProject = function (event) {\r\n    var projectTitle = event.target;\r\n    var projectID = +projectTitle.getAttribute(\"data-id\");\r\n    var parentDiv = projectTitle.parentElement;\r\n    var project = _projects__WEBPACK_IMPORTED_MODULE_0__.projectsList[projectID];\r\n    // if not expanded, show task titles in project\r\n    if (projectTitle.classList.contains(\"unexpanded\")) {\r\n        for (var _i = 0, _a = project.tasks; _i < _a.length; _i++) {\r\n            var task = _a[_i];\r\n            var taskItem = document.createElement(\"li\");\r\n            taskItem.classList.add(\"task-name\");\r\n            taskItem.innerText = task.title;\r\n            parentDiv.appendChild(taskItem);\r\n        }\r\n        projectTitle.classList.add(\"expanded\");\r\n        projectTitle.classList.remove(\"unexpanded\");\r\n    }\r\n    // else remove task titles from dom\r\n    else {\r\n        while (parentDiv.children.length > 1) {\r\n            parentDiv.removeChild(parentDiv.lastChild);\r\n        }\r\n        projectTitle.classList.add(\"unexpanded\");\r\n        projectTitle.classList.remove(\"expanded\");\r\n    }\r\n    selectProject(_projects__WEBPACK_IMPORTED_MODULE_0__.projectsList, projectID);\r\n};\r\n// displays all projects in the sidebar\r\nfunction displayProjects() {\r\n    document.querySelector(\".projects\").innerHTML = \"\";\r\n    var sidebar = document.querySelector(\".projects\");\r\n    for (var i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__.projectsList.length; i++) {\r\n        sidebar.innerHTML += \"<ul>\\n    <li class=\\\"project-name unexpanded\\\" onclick=\\\"expandProject(event)\\\" data-id=\\\"\".concat(i, \"\\\">\\n    \").concat(_projects__WEBPACK_IMPORTED_MODULE_0__.projectsList[i].title, \"\\n    </li>\\n    </ul>\");\r\n    }\r\n}\r\nfunction selectProject(projectList, index) {\r\n    var project = projectList[index];\r\n    selectedProject = index;\r\n    document.querySelector(\".content\").innerHTML = \"\";\r\n    for (var _i = 0, _a = project.tasks; _i < _a.length; _i++) {\r\n        var task = _a[_i];\r\n        displayTask(task);\r\n    }\r\n    document.querySelector(\".content\").innerHTML += \"<button onclick=\\\"onClickAddTask()\\\">\\n  <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\">\\n    <path d=\\\"M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z\\\" />\\n  </svg>\\n</button>\";\r\n}\r\ndisplayProjects();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/display.ts?");

/***/ }),

/***/ "./src/index.js.ts":
/*!*************************!*\
  !*** ./src/index.js.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.ts\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.ts\");\n/* harmony import */ var _favicon_32x32_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favicon-32x32.png */ \"./src/favicon-32x32.png\");\n\r\n\r\n\r\n\r\nvar task = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.makeTask)('Test Project', 'This is a test.', '3/11/2023', 3);\r\n(0,_display__WEBPACK_IMPORTED_MODULE_2__.displayTask)(task);\r\n// Tasks\r\nwindow.onClickAddTask = function () {\r\n    window.onClickCancelProjectForm();\r\n    var form = document.querySelector('form.task-create');\r\n    form.setAttribute('style', 'display: block');\r\n    form.reset();\r\n};\r\nwindow.onClickCancelTaskForm = function () {\r\n    var form = document.querySelector('form.task-create');\r\n    form.setAttribute('style', 'display: none');\r\n    form.reset();\r\n};\r\nwindow.onClickCreateTask = function () {\r\n    var formData = new FormData(document.querySelector('form.task-create'));\r\n    var newTask = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.makeTask)(formData.get('title').toString(), formData.get('desc').toString(), formData.get('duedate').toString(), +formData.get('priority'));\r\n    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsList[_display__WEBPACK_IMPORTED_MODULE_2__.selectedProject].tasks.push(newTask);\r\n    (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();\r\n    (0,_display__WEBPACK_IMPORTED_MODULE_2__.selectProject)(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsList, _display__WEBPACK_IMPORTED_MODULE_2__.selectedProject);\r\n    window.localStorage.setItem(\"projectsList\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsList));\r\n};\r\n// Projects\r\nwindow.onClickAddProject = function () {\r\n    window.onClickCancelTaskForm();\r\n    var form = document.querySelector('form.project-create');\r\n    form.setAttribute('style', 'display: block');\r\n    form.reset();\r\n};\r\nwindow.onClickCancelProjectForm = function () {\r\n    var form = document.querySelector('form.project-create');\r\n    form.setAttribute('style', 'display: none');\r\n    form.reset();\r\n};\r\nwindow.onClickCreateProject = function () {\r\n    var formData = new FormData(document.querySelector('form.project-create'));\r\n    var newProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.makeProject)(formData.get('title').toString());\r\n    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsList.push(newProject);\r\n    (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();\r\n    window.localStorage.setItem(\"projectsList\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsList));\r\n};\r\nwindow.deleteSelectedProject = function () {\r\n    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsList.splice(_display__WEBPACK_IMPORTED_MODULE_2__.selectedProject, 1);\r\n    window.localStorage.setItem(\"projectsList\", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsList));\r\n    (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();\r\n    document.querySelector('.content').innerHTML = '';\r\n    window.onClickCancelProjectForm();\r\n    window.onClickCancelTaskForm();\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js.ts?");

/***/ }),

/***/ "./src/projects.ts":
/*!*************************!*\
  !*** ./src/projects.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeProject\": () => (/* binding */ makeProject),\n/* harmony export */   \"makeTask\": () => (/* binding */ makeTask),\n/* harmony export */   \"projectsList\": () => (/* binding */ projectsList)\n/* harmony export */ });\n\r\nvar projectsList = [\r\n    {\r\n        title: \"Project\",\r\n        tasks: [\r\n            makeTask(\"Test Task\", \"This is a test.\", \"3/11/2023\", 3),\r\n            makeTask(\"Test Task2\", \"This is a test.\", \"3/11/2023\", 3),\r\n        ],\r\n    },\r\n];\r\nfunction makeProject(title) {\r\n    return { title: title, tasks: [] };\r\n}\r\nfunction makeTask(title, description, due, priority) {\r\n    return { title: title, description: description, due: due, priority: priority, completed: false };\r\n}\r\nfunction storageAvailable(type) {\r\n    var storage;\r\n    try {\r\n        storage = window[+type];\r\n        var x = '__storage_test__';\r\n        storage.setItem(x, x);\r\n        storage.removeItem(x);\r\n        return true;\r\n    }\r\n    catch (e) {\r\n        return e instanceof DOMException && (\r\n        // everything except Firefox\r\n        e.code === 22 ||\r\n            // Firefox\r\n            e.code === 1014 ||\r\n            // test name field too, because code might not be present\r\n            // everything except Firefox\r\n            e.name === 'QuotaExceededError' ||\r\n            // Firefox\r\n            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\r\n            // acknowledge QuotaExceededError only if there's something already stored\r\n            (storage && storage.length !== 0);\r\n    }\r\n}\r\nfunction checkStorage() {\r\n    if (storageAvailable('localStorage')) {\r\n        projectsList = JSON.parse(localStorage.getItem('projectsList')) || [];\r\n        localStorage.setItem;\r\n    }\r\n    else {\r\n        // Too bad, no localStorage for us\r\n    }\r\n}\r\ncheckStorage();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/projects.ts?");

/***/ }),

/***/ "./src/caret.png":
/*!***********************!*\
  !*** ./src/caret.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae2a5b888ebaa5dbbe6a.png\";\n\n//# sourceURL=webpack://to-do-list/./src/caret.png?");

/***/ }),

/***/ "./src/favicon-32x32.png":
/*!*******************************!*\
  !*** ./src/favicon-32x32.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a3e5bc8965c28056c78.png\";\n\n//# sourceURL=webpack://to-do-list/./src/favicon-32x32.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js.ts");
/******/ 	
/******/ })()
;