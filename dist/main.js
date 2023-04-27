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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\nheader {\\r\\n  display: flex;\\r\\n  font-size: x-large;\\r\\n  font-family: 'poppins', sans-serif;\\r\\n  font-weight: bold;\\r\\n  column-gap: 150px;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\np {\\r\\n  font-size: 1rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  width: 100%;\\r\\n  background: black;\\r\\n  \\r\\n}\\r\\n\\r\\n.sh {\\r\\n  \\r\\n}\\r\\n\\r\\n.sh p {\\r\\n  color: #fff;\\r\\n  font-size: 1em;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 300px;\\r\\n  height: 300px;\\r\\n}\\r\\n\\r\\nul {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  list-style-type: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  float: left;\\r\\n}\\r\\n\\r\\nli a {\\r\\n  color: #fff;\\r\\n  display: block;\\r\\n  text-align: center;\\r\\n  padding: 16px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nli a:hover {\\r\\n  background-color: #73b187;\\r\\n}\\r\\n\\r\\n.listsMovie {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 6em;\\r\\n  width: 250px;\\r\\n  margin-top: 30px;\\r\\n  margin-left: 3em;\\r\\n  padding: 1em;\\r\\n}\\r\\n\\r\\n.Movie {\\r\\n  border: rgb(19, 18, 18) 3px solid;\\r\\n  height: 400px;\\r\\n}\\r\\n\\r\\n.NameMovie {\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.ItemLike {\\r\\n  display: flex;\\r\\n  column-gap: 40px;\\r\\n  column-gap: 20px;\\r\\n  justify-content: center;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.likeDiv {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.DivBtncomment {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  margin-bottom: 5px;\\r\\n  margin-top: -10px;\\r\\n}\\r\\n\\r\\n.Position {\\r\\n  position: absolute;\\r\\n  display: none;\\r\\n  top: 0;\\r\\n  justify-content: center;\\r\\n  width: 110vw;\\r\\n  background-color: rgba(10, 119, 138, 0.74);\\r\\n  overflow: scroll;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  font-family: 'poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  background-color: black;\\r\\n}\\r\\n\\r\\n.footer p {\\r\\n  color: #fff;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.FramePopup {\\r\\n  /* background-color: rgb(30, 96, 138); */\\r\\n  background: hsl(0, 100%, 50%);\\r\\n  background: linear-gradient(359deg, hsl(0, 100%, 50%) 0%, #00ffe7 20%);\\r\\n  background: -webkit-linear-gradient(359deg, hsl(0, 100%, 50%) 0%, #00ffe7 20%);\\r\\n  background: -moz-linear-gradient(359deg, hsl(0, 100%, 50%) 0%, #00ffe7 20%);\\r\\n  padding: 50px;\\r\\n  width: 50vw;\\r\\n  border-radius: 30px;\\r\\n  margin-bottom: 400px;\\r\\n  box-shadow: 10px 10px 5px 0 #000000bf;\\r\\n  -webkit-box-shadow: 10px 10px 5px 0 #000000bf;\\r\\n  -moz-box-shadow: 10px 10px 5px 0 #000000bf;\\r\\n}\\r\\n\\r\\n.popupImage {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 15px;\\r\\n  row-gap: 10px;\\r\\n}\\r\\n\\r\\n.inputText1 {\\r\\n  width: 30%;\\r\\n  height: 30px;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.inputText2 {\\r\\n  width: 90%;\\r\\n  height: 100px;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.specifits {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.Popupname {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.sumary {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.commentPOPup {\\r\\n  width: 100px;\\r\\n  height: 50px;\\r\\n  border-radius: 15px;\\r\\n  background-color: darkslateblue;\\r\\n  color: aliceblue;\\r\\n}\\r\\n\\r\\n.DivcommentPOPup {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.PopupImage {\\r\\n  min-width: 100%;\\r\\n  height: 600px;\\r\\n}\\r\\n\\r\\n.fa-timesBtn {\\r\\n  border: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.timesDiv {\\r\\n  display: flex;\\r\\n  justify-content: end;\\r\\n}\\r\\n\\r\\n.fa-times {\\r\\n  font-size: x-large;\\r\\n  margin-right: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.gg {\\r\\n  margin-bottom: 10px;\\r\\n  margin-left: 20px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript_capstone_project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Modules/Popup.js":
/*!******************************!*\
  !*** ./src/Modules/Popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Getcomment\": () => (/* binding */ Getcomment),\n/* harmony export */   \"commentPopup\": () => (/* binding */ commentPopup)\n/* harmony export */ });\nconst commentPopup = async () => {\r\n  const IdApp = 'znEt8NLbG52uig66lI2e';\r\n  const Btncomment1 = document.querySelectorAll('.commentPOPup');\r\n  const arrcommentPOPup = Array.from(Btncomment1);\r\n  arrcommentPOPup.forEach((element) => {\r\n    element.addEventListener('click', () => {\r\n      const placeComment = element.parentElement.parentElement.parentElement.querySelector('.placeComment');\r\n      \r\n      const Inp1 = element.parentElement.parentElement.querySelector('.inputText1').value;\r\n      const Inp2 = element.parentElement.parentElement.querySelector('.inputText2').value;\r\n      const name = element.parentElement.parentElement.parentElement.querySelector('.Popupname').innerHTML;\r\n\r\n      // commentPopup();\r\n      const commenT = {\r\n        ' item_id ': `${name}`,\r\n        ' username ': Inp1,\r\n        ' comment ': Inp2,\r\n      };\r\n\r\n      const objectCommet = JSON.stringify(commenT);\r\n\r\n      const PostApp = async () => {\r\n        try {\r\n          const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${IdApp}/comments`,\r\n            {\r\n              method: 'POST',\r\n              body: objectCommet,\r\n              headers: {\r\n                'Content-Type': 'application/json',\r\n              },\r\n            });\r\n          const data = await res.json();\r\n          console.log(data);\r\n        } catch (error) {\r\n          console.log('error :', error);\r\n        }\r\n      };\r\n      PostApp();\r\n    });\r\n  });\r\n};\r\n\r\nconst Getcomment = async (placeComment) => {\r\n  try {\r\n    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/znEt8NLbG52uig66lI2e/comments?item_id=Arrow',\r\n      {\r\n        method: 'GET',\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n        },\r\n      });\r\n    const t = await res.json();\r\n    console.log(t);\r\n    for (let i = 0; i < t.length; i++) {\r\n      const comment = document.createElement('div');\r\n      comment.className = 'gg';\r\n      comment.innerHTML = `\r\n         <hr>\r\n         <div>comment: ${t[i].comment}</div>\r\n         <div>creation date:${t[i].creation_date}</div>\r\n         <div> username:${t[i].username}</div>\r\n         `;\r\n      placeComment.appendChild(comment);\r\n    }\r\n  } catch (error) {\r\n    console.log('error :', error);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/Modules/Popup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Modules_Popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/Popup.js */ \"./src/Modules/Popup.js\");\n/* harmony import */ var _module_forlikes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/forlikes */ \"./src/module/forlikes.js\");\n// import _, { get } from 'lodash';\r\n\r\n\r\n\r\n\r\nconst GetShows = async () => {\r\n  try {\r\n    const listsMovie = document.querySelector('.listsMovie');\r\n    for (let i = 1; i <= 15; i++) {\r\n      const url = `https://api.tvmaze.com/shows/${i}`;\r\n      const res = await fetch(url);\r\n      const shows = await res.json();\r\n      const allmovies = document.querySelector('.allmovies');\r\n      allmovies.innerHTML = `Movies[${shows.id}]`;\r\n      const Movie = document.createElement('div');\r\n      const Position = document.createElement('div');\r\n      Position.className = 'Position';\r\n      Position.innerHTML = `\r\n   <div class=\"FramePopup\">\r\n      <div class=\"timesDiv\"> <button class=\"fa-timesBtn\"><i class='fa fa-times'></i></button></div>\r\n       <div class=\"popupImage\">\r\n         <img src=\"${shows.image.original}\" alt=\"\" srcset=\"\" class=\"PopupImage\">\r\n       \r\n       </div>\r\n       <div class=\"Popupname\">${shows.name}</div>\r\n     \r\n       <div class=\"specifits\">\r\n         <div>\r\n           <div>Language :${shows.language\r\n}</div>\r\n           <div>Genres :${shows.genres.toString()\r\n}</div>\r\n         </div>\r\n         <div>\r\n           <div>Premiered\r\n           :${shows.premiered\r\n\r\n}</div>\r\n           <div>Ended :${shows.ended\r\n\r\n}</div>\r\n         </div>\r\n       </div>\r\n       <h2>summary</h2>\r\n       <div class=\"sumary\">${shows.summary\r\n}</div>\r\n       <div class=\"placeComment\"></div>\r\n       <form class=\"form\" action=\"\">\r\n         <input class=\"inputText1\" type=\"text\">\r\n        <textarea class=\"inputText2\" name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n        <div class=\"DivcommentPOPup\"> <button class=\"commentPOPup\" type=\"button\">Comment</button></div>\r\n       </form>\r\n     </div>\r\n   `;\r\n\r\n      Movie.className = 'Movie';\r\n      Movie.innerHTML = `\r\n   <img src=\"${shows.image.medium}\">\r\n   <div class=\"ItemLike\">\r\n     <div class=\"showName\"><p>${shows.name}  ${i}</p></div>\r\n     <div class=\"likeDiv\">\r\n       <i id=\"reacttoit${i}\"class='fa fa-heart-o green-color'></i>\r\n       <div class=\"dis${i}\">\r\n       </div>\r\n     </div>\r\n  \r\n   </div>\r\n   <div class=\"DivBtncomment\"> <button class=\"Btncomment\" type=\"button\">comments</button> </div>  \r\n   `;\r\n      Movie.appendChild(Position);\r\n      // listsMovie.appendChild(Position);\r\n      listsMovie.appendChild(Movie);\r\n    }(0,_Modules_Popup_js__WEBPACK_IMPORTED_MODULE_1__.commentPopup)();\r\n\r\n    const ShowPopup = () => {\r\n      const Btncomment1 = document.querySelectorAll('.Btncomment');\r\n      const arrBtncomment = Array.from(Btncomment1);\r\n      arrBtncomment.forEach((element) => {\r\n        element.addEventListener('click', () => {\r\n          const pop = element.parentElement.parentElement.querySelector('.Position');\r\n          pop.style.display = 'flex';\r\n          const op = element.parentElement.parentElement.querySelector('.Position').querySelector('.FramePopup').querySelector('.placeComment');\r\n\r\n          (0,_Modules_Popup_js__WEBPACK_IMPORTED_MODULE_1__.Getcomment)(op);\r\n        });\r\n      });\r\n    };\r\n    ShowPopup();\r\n    const ClossePopup = () => {\r\n      let Bntcloss = document.querySelectorAll('.fa-timesBtn');\r\n      let arrBntcloss = Array.from(Bntcloss);\r\n      arrBntcloss.forEach((element) => {\r\n        element.addEventListener('click', () => {\r\n          element.parentElement.parentElement.parentElement.querySelector('.FramePopup').style.display = 'none';\r\n          element.style.display = 'none';\r\n          Bntcloss = document.querySelectorAll('.fa-timesBtn');\r\n          arrBntcloss = Array.from(Bntcloss);\r\n        });\r\n      });\r\n    };\r\n    ClossePopup();\r\n  } catch (error) {\r\n    console.log('error', error);\r\n  }\r\n};\r\n\r\nGetShows();\r\n\r\nfor (let i = 0; i <= 15; i += 1) {\r\n  const displayLikes = async () => {\r\n    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/');\r\n    const data = await res.json();\r\n    const dis = document.querySelector(`.dis${i}`);\r\n    dis.innerHTML = `<p>likes ${data[i].likes} </p>`;\r\n    const lik = document.querySelector(`#reacttoit${i}`);\r\n    lik.addEventListener('click', () => {\r\n      lik.style.color = 'black'\r\n      data[i].likes += 1;\r\n      (0,_module_forlikes__WEBPACK_IMPORTED_MODULE_2__.allLikes)(i + 1);\r\n      dis.innerHTML = `<p>likes ${data[i].likes} </p>`;\r\n      window.onload;\r\n    });\r\n  };\r\n  displayLikes();\r\n}\r\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/index.js?");

/***/ }),

/***/ "./src/module/forlikes.js":
/*!********************************!*\
  !*** ./src/module/forlikes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allLikes\": () => (/* binding */ allLikes)\n/* harmony export */ });\nconst allLikes = async (id) => {\r\n  try {\r\n    const items = `item${id}`;\r\n    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/32UoQxjPo3aTpkPwZxqF/likes/', {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: items,\r\n      }),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    });\r\n  } catch (error) {\r\n    console.log('Error creating likes:', error);\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascript_capstone_project/./src/module/forlikes.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;