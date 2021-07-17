(function() {
var exports = {};
exports.id = "pages/api/auth";
exports.ids = ["pages/api/auth"];
exports.modules = {

/***/ "./pages/api/auth.js":
/*!***************************!*\
  !*** ./pages/api/auth.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ githubAuth; }
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

async function githubAuth(req, res) {
  const {
    authorization
  } = req.headers;
  const tokenDecoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode(authorization);

  if (!tokenDecoded) {
    return res.send({
      isAuthenticated: false
    });
  }

  const response = await fetch(`https://api.github.com/users/${tokenDecoded.githubUser}`);
  const data = await response.json();

  if (data.message === "Not Found" || !data) {
    res.send({
      isAuthenticated: false
    });
  } else {
    res.send({
      isAuthenticated: true
    });
  }
}

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vcGFnZXMvYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIl0sIm5hbWVzIjpbImdpdGh1YkF1dGgiLCJyZXEiLCJyZXMiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInRva2VuRGVjb2RlZCIsImp3dCIsInNlbmQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJyZXNwb25zZSIsImZldGNoIiwiZ2l0aHViVXNlciIsImRhdGEiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsZUFBZUEsVUFBZixDQUEwQkMsR0FBMUIsRUFBK0JDLEdBQS9CLEVBQW9DO0FBQ2pELFFBQU07QUFBRUM7QUFBRixNQUFvQkYsR0FBRyxDQUFDRyxPQUE5QjtBQUVBLFFBQU1DLFlBQVksR0FBR0MsMERBQUEsQ0FBV0gsYUFBWCxDQUFyQjs7QUFFQSxNQUFJLENBQUNFLFlBQUwsRUFBbUI7QUFDakIsV0FBT0gsR0FBRyxDQUFDSyxJQUFKLENBQVM7QUFDZEMscUJBQWUsRUFBRTtBQURILEtBQVQsQ0FBUDtBQUdEOztBQUVELFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLGdDQUErQkwsWUFBWSxDQUFDTSxVQUFXLEVBRDlCLENBQTVCO0FBR0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBVCxFQUFuQjs7QUFFQSxNQUFJRCxJQUFJLENBQUNFLE9BQUwsS0FBaUIsV0FBakIsSUFBZ0MsQ0FBQ0YsSUFBckMsRUFBMkM7QUFDekNWLE9BQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQ1BDLHFCQUFlLEVBQUU7QUFEVixLQUFUO0FBR0QsR0FKRCxNQUlPO0FBQ0xOLE9BQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQ1BDLHFCQUFlLEVBQUU7QUFEVixLQUFUO0FBR0Q7QUFDRixDOzs7Ozs7Ozs7OztBQzNCRCwwQyIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2l0aHViQXV0aChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gcmVxLmhlYWRlcnM7XHJcblxyXG4gIGNvbnN0IHRva2VuRGVjb2RlZCA9IGp3dC5kZWNvZGUoYXV0aG9yaXphdGlvbik7XHJcblxyXG4gIGlmICghdG9rZW5EZWNvZGVkKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3Rva2VuRGVjb2RlZC5naXRodWJVc2VyfWBcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmIChkYXRhLm1lc3NhZ2UgPT09IFwiTm90IEZvdW5kXCIgfHwgIWRhdGEpIHtcclxuICAgIHJlcy5zZW5kKHtcclxuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==