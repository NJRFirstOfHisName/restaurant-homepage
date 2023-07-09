"use strict";
(self["webpackChunkrestaurant_homepage"] =
  self["webpackChunkrestaurant_homepage"] || []).push([
  ["menu"],
  {
    /***/ "./src/menu.js":
      /*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ printMenu,
          /* harmony export */
        });
        function printMenu() {
          const Menu = [
            {
              Name: "Boigah",
              Cost: "$14",
            },
            {
              Name: "Fries",
              Cost: "$5",
            },
            {
              Name: "Milkshake",
              Cost: "$4",
            },
          ];

          const menuDisplay = document.createElement("ul");

          Menu.forEach((item) => {
            const menuItem = document.createElement("li");
            const itemText = document.createTextNode(item.Name);
            menuItem.appendChild(itemText);
            menuDisplay.appendChild(menuItem);

            const menuCost = document.createElement("li");
            const costText = document.createTextNode(item.Cost);
            menuCost.appendChild(costText);
            menuDisplay.appendChild(menuCost);
          });

          const content = document.getElementById("content");
          content.appendChild(menuDisplay);
        }

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/menu.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lbnUoKSB7XHJcbiAgICBjb25zdCBNZW51ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZTogXCJCb2lnYWhcIixcclxuICAgICAgICAgICAgQ29zdDogXCIkMTRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lOiBcIkZyaWVzXCIsXHJcbiAgICAgICAgICAgIENvc3Q6IFwiJDVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lOiBcIk1pbGtzaGFrZVwiLFxyXG4gICAgICAgICAgICBDb3N0OiBcIiQ0XCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgbWVudURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIE1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGl0ZW0uTmFtZSk7XHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xyXG4gICAgICAgIG1lbnVEaXNwbGF5LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUNvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGNvc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaXRlbS5Db3N0KTtcclxuICAgICAgICBtZW51Q29zdC5hcHBlbmRDaGlsZChjb3N0VGV4dCk7XHJcbiAgICAgICAgbWVudURpc3BsYXkuYXBwZW5kQ2hpbGQobWVudUNvc3QpO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpc3BsYXkpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
