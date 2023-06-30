"use strict";
(self["webpackChunkrestaurant_homepage"] = self["webpackChunkrestaurant_homepage"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printScreen)
/* harmony export */ });
/* harmony import */ var _headerCrop_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerCrop.jpg */ "./src/headerCrop.jpg");



function printScreen() {
    const element = document.createElement('div');

    const headerImage = new Image();
    headerImage.src = _headerCrop_jpg__WEBPACK_IMPORTED_MODULE_0__;
    element.appendChild(headerImage);

    const header = document.createElement('h2');
    const headerText = document.createTextNode("Tastee Boigahs");
    header.appendChild(headerText);
    element.appendChild(header);

    const promo = document.createElement('p');
    const promoText = document.createTextNode("Yum yum yum yum")
    promo.appendChild(promoText);
    element.appendChild(promo);

    document.body.appendChild(element);
}

/***/ }),

/***/ "./src/headerCrop.jpg":
/*!****************************!*\
  !*** ./src/headerCrop.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0f28df3df591fd71c2a.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ3JDO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0Q0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaEltYWdlIGZyb20gJy4vaGVhZGVyQ3JvcC5qcGcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRTY3JlZW4oKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGhlYWRlckltYWdlLnNyYyA9IGhJbWFnZTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVySW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUYXN0ZWUgQm9pZ2Foc1wiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBwcm9tbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByb21vVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiWXVtIHl1bSB5dW0geXVtXCIpXHJcbiAgICBwcm9tby5hcHBlbmRDaGlsZChwcm9tb1RleHQpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChwcm9tbyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==