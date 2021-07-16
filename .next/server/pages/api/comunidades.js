(function() {
var exports = {};
exports.id = "pages/api/comunidades";
exports.ids = ["pages/api/comunidades"];
exports.modules = {

/***/ "./pages/api/comunidades.js":
/*!**********************************!*\
  !*** ./pages/api/comunidades.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ recebedorDeRequests; }
/* harmony export */ });
/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datocms-client */ "datocms-client");
/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datocms_client__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = '1e7e409d4eb9a59e2398b4c5a70fd1';
    const client = new datocms_client__WEBPACK_IMPORTED_MODULE_0__.SiteClient(TOKEN); // Validar os dados, antes de sair cadastrando

    const registroCriado = await client.items.create(_objectSpread({
      itemType: "968529"
    }, request.body));
    console.log(registroCriado);
    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado
    });
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  });
}

/***/ }),

/***/ "datocms-client":
/*!*********************************!*\
  !*** external "datocms-client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("datocms-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/comunidades.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29tdW5pZGFkZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0b2Ntcy1jbGllbnRcIiJdLCJuYW1lcyI6WyJyZWNlYmVkb3JEZVJlcXVlc3RzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwiVE9LRU4iLCJjbGllbnQiLCJTaXRlQ2xpZW50IiwicmVnaXN0cm9DcmlhZG8iLCJpdGVtcyIsImNyZWF0ZSIsIml0ZW1UeXBlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGFkb3MiLCJzdGF0dXMiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxlQUFlQSxtQkFBZixDQUFtQ0MsT0FBbkMsRUFBNENDLFFBQTVDLEVBQXNEO0FBQ2pFLE1BQUdELE9BQU8sQ0FBQ0UsTUFBUixLQUFtQixNQUF0QixFQUE4QjtBQUMxQixVQUFNQyxLQUFLLEdBQUcsZ0NBQWQ7QUFDQSxVQUFNQyxNQUFNLEdBQUcsSUFBSUMsc0RBQUosQ0FBZUYsS0FBZixDQUFmLENBRjBCLENBSTFCOztBQUNBLFVBQU1HLGNBQWMsR0FBRyxNQUFNRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsTUFBYjtBQUN6QkMsY0FBUSxFQUFFO0FBRGUsT0FFdEJULE9BQU8sQ0FBQ1UsSUFGYyxFQUE3QjtBQVFBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sY0FBWjtBQUVBTCxZQUFRLENBQUNZLElBQVQsQ0FBYztBQUNWQyxXQUFLLEVBQUUscUJBREc7QUFFVlIsb0JBQWMsRUFBRUE7QUFGTixLQUFkO0FBSUE7QUFDSDs7QUFFREwsVUFBUSxDQUFDYyxNQUFULENBQWdCLEdBQWhCLEVBQXFCRixJQUFyQixDQUEwQjtBQUN0QkcsV0FBTyxFQUFFO0FBRGEsR0FBMUI7QUFHSCxDOzs7Ozs7Ozs7OztBQzVCRCw0QyIsImZpbGUiOiJwYWdlcy9hcGkvY29tdW5pZGFkZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXRlQ2xpZW50IH0gZnJvbSAnZGF0b2Ntcy1jbGllbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVjZWJlZG9yRGVSZXF1ZXN0cyhyZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgaWYocmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIGNvbnN0IFRPS0VOID0gJzFlN2U0MDlkNGViOWE1OWUyMzk4YjRjNWE3MGZkMSc7XHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFNpdGVDbGllbnQoVE9LRU4pO1xyXG5cclxuICAgICAgICAvLyBWYWxpZGFyIG9zIGRhZG9zLCBhbnRlcyBkZSBzYWlyIGNhZGFzdHJhbmRvXHJcbiAgICAgICAgY29uc3QgcmVnaXN0cm9DcmlhZG8gPSBhd2FpdCBjbGllbnQuaXRlbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgaXRlbVR5cGU6IFwiOTY4NTI5XCIsIC8vIElEIGRvIE1vZGVsIGRlIFwiQ29tbXVuaXRpZXNcIiBjcmlhZG8gcGVsbyBEYXRvXHJcbiAgICAgICAgICAgIC4uLnJlcXVlc3QuYm9keSxcclxuICAgICAgICAgICAgLy8gdGl0bGU6IFwiQ29tdW5pZGFkZSBkZSBUZXN0ZVwiLFxyXG4gICAgICAgICAgICAvLyBpbWFnZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vcmFmYWVsc2Nod2FudGVzLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBjcmVhdG9yU2x1ZzogXCJvbWFyaW9zb3V0b1wiXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVnaXN0cm9DcmlhZG8pO1xyXG5cclxuICAgICAgICByZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgZGFkb3M6ICdBbGd1bSBkYWRvIHF1YWxxdWVyJyxcclxuICAgICAgICAgICAgcmVnaXN0cm9DcmlhZG86IHJlZ2lzdHJvQ3JpYWRvLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3BvbnNlLnN0YXR1cyg0MDQpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdBaW5kYSBuw6NvIHRlbW9zIG5hZGEgbm8gR0VULCBtYXMgbm8gUE9TVCB0ZW0hJ1xyXG4gICAgfSlcclxufSAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRvY21zLWNsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==