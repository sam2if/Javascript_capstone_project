/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {


"use strict";

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n// const GetShows=async ()=>{\r\n//  try {\r\n//   const res = await fetch(url);\r\n//   const shows = await res.json();\r\n//   console.log(shows)\r\n\r\n//  }catch(error) {\r\n//   console.log(\"error\", error);\r\n//  }\r\n// }\r\n// GetShows()\r\n\r\nconst GetShows=async ()=>{\r\n try {\r\n  \r\n  const listsMovie = document.querySelector('.listsMovie');\r\n  for(let i=1 ;i <=15 ;i++){\r\n   const url = `https://api.tvmaze.com/shows/${i}`\r\n   const res = await fetch(url);\r\n   const shows = await res.json();\r\n   console.log(res)\r\n   const Movie = document.createElement('div');\r\n   Movie.className='Movie'\r\n   Movie.innerHTML =`\r\n   <img src=\"${shows.image.medium}\"\r\n   <div class=\"ItemLike\">\r\n     <div>${shows.name}  ${i}</div>\r\n     <div class=\"likeDiv\">\r\n       <button> <i class='fa fa-heart-o green-color'></i></button>\r\n       <div>\r\n         3 Likes\r\n       </div>\r\n     </div>\r\n     \r\n   </div>\r\n   <div class=\"DivBtncomment\"><button>comments</button></div>   \r\n   \r\n   `\r\n   listsMovie.appendChild(Movie)\r\n  }\r\n  \r\n }catch(error) {\r\n  console.log(\"error\", error);\r\n }\r\n}\r\n\r\nGetShows()\n\n//# sourceURL=webpack://javascript_capstone_project/./src/index.js?");

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n// const GetShows=async ()=>{\r\n//  try {\r\n//   const res = await fetch(url);\r\n//   const shows = await res.json();\r\n//   console.log(shows)\r\n\r\n//  }catch(error) {\r\n//   console.log(\"error\", error);\r\n//  }\r\n// }\r\n// GetShows()\r\n\r\nconst GetShows=async ()=>{\r\n try {\r\n  \r\n  const listsMovie=document.querySelector('.listsMovie');\r\n  for(let i=1 ;i <=15 ;i++){\r\n   const url = `https://api.tvmaze.com/shows/${i}`\r\n   const res = await fetch(url);\r\n   const shows = await res.json();\r\n   console.log(res)\r\n   const Movie =document.createElement('div');\r\n   Movie.className='Movie'\r\n   Movie.innerHTML =`\r\n   <img src=\"${shows.image.medium}\"\r\n   <div class=\"ItemLike\">\r\n     <div>${shows.name}</div>\r\n     <div class=\"likeDiv\">\r\n       <button> <i class='fa fa-heart-o green-color'></i></button>\r\n       <div>\r\n         3 Likes\r\n       </div>\r\n     </div>\r\n     \r\n   </div>\r\n   <div class=\"DivBtncomment\"><button>comments</button></div>   \r\n   \r\n   `\r\n   listsMovie.appendChild(Movie)\r\n  }\r\n  \r\n }catch(error) {\r\n  console.log(\"error\", error);\r\n }\r\n}\r\nGetShows()\n\n//# sourceURL=webpack://javascript_capstone_project/./src/index.js?");


eval("throw new Error(\"Module parse failed: Unexpected token (31:19)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     const listsMovie = document.querySelector('.listsMovie');\\n|     for (let i = 1; i <= 15; i++) {\\n>       const url = `https://api.tvmaze.com/shows/${i}`;\\n|       const res = await fetch(url);\\n|       const shows = await res.json();\");\n\n//# sourceURL=webpack://javascript_capstone_project/./src/index.js?");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;