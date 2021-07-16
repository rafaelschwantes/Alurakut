self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_www2_schwantes_Alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_www2_schwantes_Alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_www2_schwantes_Alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_MainGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/MainGrid */ "./src/components/MainGrid/index.js");
/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Box */ "./src/components/Box/index.js");
/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ "./src/lib/AlurakutCommons.js");
/* harmony import */ var _src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/ProfileRelations */ "./src/components/ProfileRelations/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\www2\\schwantes\\Alurakut\\pages\\index.js",
    _s = $RefreshSig$();







function ProfileSidebar(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
    as: "aside",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "https://github.com/".concat(propriedades.githubUser, ".png"),
      style: {
        borderRadius: '8px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "boxLink",
        href: "https://github.com/".concat(propriedades.githubUser),
        children: ["@", propriedades.githubUser]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__.AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = ProfileSidebar;

function ProfileRelationsBox(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__.ProfileRelationsBoxWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "smallTitle",
      children: [propriedades.title, " (", propriedades.items.length, ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_c2 = ProfileRelationsBox;
function Home() {
  _s();

  var _this = this;

  var usuarioAleatorio = 'rafaelschwantes';

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]),
      _React$useState2 = (0,C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      comunidades = _React$useState2[0],
      setComunidades = _React$useState2[1]; // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];
  // const comunidades = ['Alurakut'];


  var pessoasFavoritas = ['rafaelschwantes', 'rafaelschwantes', 'rafaelschwantes', 'rafaelschwantes', 'rafaelschwantes', 'rafaelschwantes'];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]),
      _React$useState4 = (0,C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState3, 2),
      seguidores = _React$useState4[0],
      setSeguidores = _React$useState4[1]; // 0 - Pegar o array de dados do github 


  react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(function () {
    // GET
    fetch('https://api.github.com/users/peas/followers').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguidores(respostaCompleta);
    }); // API GraphQL

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '7f7590695431ea76f84616a4b4d32d',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "query": "query {\n        allCommunities {\n          id \n          title\n          imageUrl\n          creatorSlug\n        }\n      }"
      })
    }).then(function (response) {
      return response.json();
    }) // Pega o retorno do response.json() e já retorna
    .then(function (respostaCompleta) {
      var comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesVindasDoDato);
      setComunidades(comunidadesVindasDoDato);
    }); // .then(function (response) {
    //   return response.json()
    // })
  }, []);
  console.log('seguidores antes do return', seguidores); // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__.AlurakutMenu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileArea",
        style: {
          gridArea: 'profileArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {
          githubUser: usuarioAleatorio
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcomeArea",
        style: {
          gridArea: 'welcomeArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title",
            children: "Bem vindo(a)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__.OrkutNostalgicIconSet, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "subTitle",
            children: "O que voc\xEA deseja fazer?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: function handleCriaComunidade(e) {
              e.preventDefault();
              var dadosDoForm = new FormData(e.target);
              console.log('Campo: ', dadosDoForm.get('title'));
              console.log('Campo: ', dadosDoForm.get('image'));
              var comunidade = {
                title: dadosDoForm.get('title'),
                imageUrl: dadosDoForm.get('image'),
                creatorSlug: usuarioAleatorio
              };
              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(comunidade)
              }).then( /*#__PURE__*/function () {
                var _ref = (0,C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_www2_schwantes_Alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(response) {
                  var dados, comunidade, comunidadesAtualizadas;
                  return C_www2_schwantes_Alurakut_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return response.json();

                        case 2:
                          dados = _context.sent;
                          console.log(dados.registroCriado);
                          comunidade = dados.registroCriado;
                          comunidadesAtualizadas = [].concat((0,C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(comunidades), [comunidade]);
                          setComunidades(comunidadesAtualizadas);

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Qual vai ser o nome da sua comunidade?",
                name: "title",
                "aria-label": "Qual vai ser o nome da sua comunidade?",
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque uma URL para usarmos de capa",
                name: "image",
                "aria-label": "Coloque uma URL para usarmos de capa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              children: "Criar comunidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileRelationsArea",
        style: {
          gridArea: 'profileRelationsArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileRelationsBox, {
          title: "Seguidores",
          items: seguidores
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Comunidades (", comunidades.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: comunidades.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "/communities/".concat(itemAtual.id),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: itemAtual.imageUrl
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 21
                }, _this)
              }, itemAtual.id, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Pessoas da comunidade (", pessoasFavoritas.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: pessoasFavoritas.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "/users/".concat(itemAtual),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "https://github.com/".concat(itemAtual, ".png")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 21
                }, _this)
              }, itemAtual, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "ixl0YlLT0sKZ8Sjwte0IgI6K018=");

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "ProfileSidebar");
$RefreshReg$(_c2, "ProfileRelationsBox");
$RefreshReg$(_c3, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVTaWRlYmFyIiwicHJvcHJpZWRhZGVzIiwiZ2l0aHViVXNlciIsImJvcmRlclJhZGl1cyIsIlByb2ZpbGVSZWxhdGlvbnNCb3giLCJ0aXRsZSIsIml0ZW1zIiwibGVuZ3RoIiwiSG9tZSIsInVzdWFyaW9BbGVhdG9yaW8iLCJSZWFjdCIsImNvbXVuaWRhZGVzIiwic2V0Q29tdW5pZGFkZXMiLCJwZXNzb2FzRmF2b3JpdGFzIiwic2VndWlkb3JlcyIsInNldFNlZ3VpZG9yZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJqc29uIiwicmVzcG9zdGFDb21wbGV0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29tdW5pZGFkZXNWaW5kYXNEb0RhdG8iLCJkYXRhIiwiYWxsQ29tbXVuaXRpZXMiLCJjb25zb2xlIiwibG9nIiwiZ3JpZEFyZWEiLCJoYW5kbGVDcmlhQ29tdW5pZGFkZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhZG9zRG9Gb3JtIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJnZXQiLCJjb211bmlkYWRlIiwiaW1hZ2VVcmwiLCJjcmVhdG9yU2x1ZyIsImRhZG9zIiwicmVnaXN0cm9DcmlhZG8iLCJjb211bmlkYWRlc0F0dWFsaXphZGFzIiwibWFwIiwiaXRlbUF0dWFsIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTMEMsU0FBUyxDQUFDQyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBUUQsYUFUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBbUJFLDhEQUFDLHdGQUFEO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLFlBQWQ7QUFBQSxrREFDMEJuQyxnQkFBZ0IsQ0FBQ04sTUFEM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0U7QUFBQSxzQkFDR00sZ0JBQWdCLENBQUNpQyxHQUFqQixDQUFxQixVQUFDQyxTQUFELEVBQWU7QUFDbkMsa0NBQ0U7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLG1CQUFZQSxTQUFaLENBQVA7QUFBQSwwQ0FDRTtBQUFLLHVCQUFHLCtCQUF3QkEsU0FBeEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBQSw4QkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTQSxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFRRCxhQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBOEdEOztHQTNLdUJ2QyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ1OTFmNDAzNmY3MGQyNGVkNzYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5HcmlkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01haW5HcmlkJ1xuaW1wb3J0IEJveCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Cb3gnXG5pbXBvcnQgeyBBbHVyYWt1dE1lbnUsIEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCwgT3JrdXROb3N0YWxnaWNJY29uU2V0IH0gZnJvbSAnLi4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMnO1xuaW1wb3J0IHsgUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlUmVsYXRpb25zJztcblxuZnVuY3Rpb24gUHJvZmlsZVNpZGViYXIocHJvcHJpZWRhZGVzKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cImFzaWRlXCI+XG4gICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3ByaWVkYWRlcy5naXRodWJVc2VyfS5wbmdgfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc4cHgnIH19IC8+XG4gICAgICA8aHIgLz5cbiAgICAgIFxuICAgICAgPHA+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJveExpbmtcIiBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHJpZWRhZGVzLmdpdGh1YlVzZXJ9YH0+XG4gICAgICAgICAgQHtwcm9wcmllZGFkZXMuZ2l0aHViVXNlcn1cbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuICAgICAgPGhyIC8+XG5cbiAgICAgIDxBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQgLz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiBQcm9maWxlUmVsYXRpb25zQm94KHByb3ByaWVkYWRlcykge1xuICByZXR1cm4gKFxuICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XG4gICAgICAgIHtwcm9wcmllZGFkZXMudGl0bGV9ICh7cHJvcHJpZWRhZGVzLml0ZW1zLmxlbmd0aH0pXG4gICAgICA8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7Lyoge3NlZ3VpZG9yZXMubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1BdHVhbC5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfSAqL31cbiAgICAgIDwvdWw+XG4gICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB1c3VhcmlvQWxlYXRvcmlvID0gJ3JhZmFlbHNjaHdhbnRlcyc7XG4gIGNvbnN0IFtjb211bmlkYWRlcywgc2V0Q29tdW5pZGFkZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCBjb211bmlkYWRlcyA9IGNvbXVuaWRhZGVzWzBdO1xuICAvLyBjb25zdCBhbHRlcmFkb3JEZUNvbXVuaWRhZGVzL3NldENvbXVuaWRhZGVzID0gY29tdW5pZGFkZXNbMV07XG4gIC8vIGNvbnN0IGNvbXVuaWRhZGVzID0gWydBbHVyYWt1dCddO1xuICBjb25zdCBwZXNzb2FzRmF2b3JpdGFzID0gW1xuICAgICdyYWZhZWxzY2h3YW50ZXMnLFxuICAgICdyYWZhZWxzY2h3YW50ZXMnLFxuICAgICdyYWZhZWxzY2h3YW50ZXMnLFxuICAgICdyYWZhZWxzY2h3YW50ZXMnLFxuICAgICdyYWZhZWxzY2h3YW50ZXMnLFxuICAgICdyYWZhZWxzY2h3YW50ZXMnLFxuICBdXG4gIGNvbnN0IFtzZWd1aWRvcmVzLCBzZXRTZWd1aWRvcmVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgLy8gMCAtIFBlZ2FyIG8gYXJyYXkgZGUgZGFkb3MgZG8gZ2l0aHViIFxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgLy8gR0VUXG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcGVhcy9mb2xsb3dlcnMnKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YURvU2Vydmlkb3IpIHtcbiAgICAgIHJldHVybiByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9zdGFDb21wbGV0YSkge1xuICAgICAgc2V0U2VndWlkb3JlcyhyZXNwb3N0YUNvbXBsZXRhKTtcbiAgICB9KVxuXG5cbiAgICAvLyBBUEkgR3JhcGhRTFxuICAgIGZldGNoKCdodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJzdmNzU5MDY5NTQzMWVhNzZmODQ2MTZhNGI0ZDMyZCcsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcInF1ZXJ5XCI6IGBxdWVyeSB7XG4gICAgICAgIGFsbENvbW11bml0aWVzIHtcbiAgICAgICAgICBpZCBcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGltYWdlVXJsXG4gICAgICAgICAgY3JlYXRvclNsdWdcbiAgICAgICAgfVxuICAgICAgfWAgfSlcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBQZWdhIG8gcmV0b3JubyBkbyByZXNwb25zZS5qc29uKCkgZSBqw6EgcmV0b3JuYVxuICAgIC50aGVuKChyZXNwb3N0YUNvbXBsZXRhKSA9PiB7XG4gICAgICBjb25zdCBjb211bmlkYWRlc1ZpbmRhc0RvRGF0byA9IHJlc3Bvc3RhQ29tcGxldGEuZGF0YS5hbGxDb21tdW5pdGllcztcbiAgICAgIGNvbnNvbGUubG9nKGNvbXVuaWRhZGVzVmluZGFzRG9EYXRvKVxuICAgICAgc2V0Q29tdW5pZGFkZXMoY29tdW5pZGFkZXNWaW5kYXNEb0RhdG8pXG4gICAgfSlcbiAgICAvLyAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvLyAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAvLyB9KVxuXG4gIH0sIFtdKVxuXG4gIGNvbnNvbGUubG9nKCdzZWd1aWRvcmVzIGFudGVzIGRvIHJldHVybicsIHNlZ3VpZG9yZXMpO1xuXG4gIC8vIDEgLSBDcmlhciB1bSBib3ggcXVlIHZhaSB0ZXIgdW0gbWFwLCBiYXNlYWRvIG5vcyBpdGVtcyBkbyBhcnJheVxuICAvLyBxdWUgcGVnYW1vcyBkbyBHaXRIdWJcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBbHVyYWt1dE1lbnUgLz5cbiAgICAgIDxNYWluR3JpZD5cbiAgICAgICAgey8qIDxCb3ggc3R5bGU9XCJncmlkLWFyZWE6IHByb2ZpbGVBcmVhO1wiPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQXJlYVwiIHN0eWxlPXt7IGdyaWRBcmVhOiAncHJvZmlsZUFyZWEnIH19PlxuICAgICAgICAgIDxQcm9maWxlU2lkZWJhciBnaXRodWJVc2VyPXt1c3VhcmlvQWxlYXRvcmlvfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lQXJlYVwiIHN0eWxlPXt7IGdyaWRBcmVhOiAnd2VsY29tZUFyZWEnIH19PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgQmVtIHZpbmRvKGEpIFxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPE9ya3V0Tm9zdGFsZ2ljSWNvblNldCAvPlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPk8gcXVlIHZvY8OqIGRlc2VqYSBmYXplcj88L2gyPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Z1bmN0aW9uIGhhbmRsZUNyaWFDb211bmlkYWRlKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGFkb3NEb0Zvcm0gPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybS5nZXQoJ3RpdGxlJykpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm0uZ2V0KCdpbWFnZScpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXVuaWRhZGUgPSB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogZGFkb3NEb0Zvcm0uZ2V0KCd0aXRsZScpLFxuICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhZG9zRG9Gb3JtLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgIGNyZWF0b3JTbHVnOiB1c3VhcmlvQWxlYXRvcmlvLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmZXRjaCgnL2FwaS9jb211bmlkYWRlcycsIHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbXVuaWRhZGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhZG9zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGFkb3MucmVnaXN0cm9DcmlhZG8pO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29tdW5pZGFkZSA9IGRhZG9zLnJlZ2lzdHJvQ3JpYWRvO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29tdW5pZGFkZXNBdHVhbGl6YWRhcyA9IFsuLi5jb211bmlkYWRlcywgY29tdW5pZGFkZV07XG4gICAgICAgICAgICAgICAgICBzZXRDb211bmlkYWRlcyhjb211bmlkYWRlc0F0dWFsaXphZGFzKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBzdWEgY29tdW5pZGFkZT9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJRdWFsIHZhaSBzZXIgbyBub21lIGRhIHN1YSBjb211bmlkYWRlP1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29sb3F1ZSB1bWEgVVJMIHBhcmEgdXNhcm1vcyBkZSBjYXBhXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ29sb3F1ZSB1bWEgVVJMIHBhcmEgdXNhcm1vcyBkZSBjYXBhXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgIENyaWFyIGNvbXVuaWRhZGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVSZWxhdGlvbnNBcmVhXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICdwcm9maWxlUmVsYXRpb25zQXJlYScgfX0+XG4gICAgICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3ggdGl0bGU9XCJTZWd1aWRvcmVzXCIgaXRlbXM9e3NlZ3VpZG9yZXN9IC8+XG4gICAgICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cbiAgICAgICAgICAgICAgQ29tdW5pZGFkZXMgKHtjb211bmlkYWRlcy5sZW5ndGh9KVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2NvbXVuaWRhZGVzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvY29tbXVuaXRpZXMvJHtpdGVtQXR1YWwuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1BdHVhbC5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XG4gICAgICAgICAgICAgIFBlc3NvYXMgZGEgY29tdW5pZGFkZSAoe3Blc3NvYXNGYXZvcml0YXMubGVuZ3RofSlcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Blc3NvYXNGYXZvcml0YXMubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC91c2Vycy8ke2l0ZW1BdHVhbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWFpbkdyaWQ+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=