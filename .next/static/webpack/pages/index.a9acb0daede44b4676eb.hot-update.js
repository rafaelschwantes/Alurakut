self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_MainGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/MainGrid */ "./src/components/MainGrid/index.js");
/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Box */ "./src/components/Box/index.js");
/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ "./src/lib/AlurakutCommons.js");
/* harmony import */ var _src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/ProfileRelations */ "./src/components/ProfileRelations/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\www2\\schwantes\\Alurakut\\pages\\index.js",
    _s = $RefreshSig$();







function ProfileSidebar(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
    as: "aside",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "https://github.com/".concat(propriedades.githubUser, ".png"),
      style: {
        borderRadius: '8px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "boxLink",
        href: "https://github.com/".concat(propriedades.githubUser),
        children: ["@", propriedades.githubUser]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = ProfileSidebar;

function ProfileRelationsBox(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "smallTitle",
      children: [propriedades.title, " (", propriedades.items.length, ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_c2 = ProfileRelationsBox;
function Home() {
  _s();

  var _this = this;

  var usuarioAleatorio = 'rafaelschwantes';

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState([{
    id: '12802378123789378912789789123896123',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]),
      _React$useState2 = (0,C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      comunidades = _React$useState2[0],
      setComunidades = _React$useState2[1]; // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];
  // const comunidades = ['Alurakut'];


  var pessoasFavoritas = ['rafaelschwantes', 'rafaelschwantes', 'rafaelschwantes', 'rafaelschwantes', 'rafaelschwantes', 'rafaelschwantes'];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState4 = (0,C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      seguidores = _React$useState4[0],
      setSeguidores = _React$useState4[1]; // 0 - Pegar o array de dados do github 


  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
    fetch('https://api.github.com/users/peas/followers').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguidores(respostaCompleta);
    });
  }, []);
  console.log('seguidores antes do return', seguidores); // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.AlurakutMenu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileArea",
        style: {
          gridArea: 'profileArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {
          githubUser: usuarioAleatorio
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcomeArea",
        style: {
          gridArea: 'welcomeArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title",
            children: "Bem vindo(a)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.OrkutNostalgicIconSet, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "subTitle",
            children: "O que voc\xEA deseja fazer?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: function handleCriaComunidade(e) {
              e.preventDefault();
              var dadosDoForm = new FormData(e.target);
              console.log('Campo: ', dadosDoForm.get('title'));
              console.log('Campo: ', dadosDoForm.get('image'));
              var comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')
              };
              var comunidadesAtualizadas = [].concat((0,C_www2_schwantes_Alurakut_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(comunidades), [comunidade]);
              setComunidades(comunidadesAtualizadas);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Qual vai ser o nome da sua comunidade?",
                name: "title",
                "aria-label": "Qual vai ser o nome da sua comunidade?",
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque uma URL para usarmos de capa",
                name: "image",
                "aria-label": "Coloque uma URL para usarmos de capa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              children: "Criar comunidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Comunidades (", comunidades.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: comunidades.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "/users/".concat(itemAtual.title),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: itemAtual.image
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, _this)
              }, itemAtual.id, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Pessoas da comunidade (", pessoasFavoritas.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
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
                    lineNumber: 159,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 21
                }, _this)
              }, itemAtual, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "qvDM7fy3JOacOjazmgPq8h1BCD8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGViYXIiLCJwcm9wcmllZGFkZXMiLCJnaXRodWJVc2VyIiwiYm9yZGVyUmFkaXVzIiwiUHJvZmlsZVJlbGF0aW9uc0JveCIsInRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJIb21lIiwidXN1YXJpb0FsZWF0b3JpbyIsIlJlYWN0IiwiaWQiLCJpbWFnZSIsImNvbXVuaWRhZGVzIiwic2V0Q29tdW5pZGFkZXMiLCJwZXNzb2FzRmF2b3JpdGFzIiwic2VndWlkb3JlcyIsInNldFNlZ3VpZG9yZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJqc29uIiwicmVzcG9zdGFDb21wbGV0YSIsImNvbnNvbGUiLCJsb2ciLCJncmlkQXJlYSIsImhhbmRsZUNyaWFDb211bmlkYWRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGFkb3NEb0Zvcm0iLCJGb3JtRGF0YSIsInRhcmdldCIsImdldCIsImNvbXVuaWRhZGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjb211bmlkYWRlc0F0dWFsaXphZGFzIiwibWFwIiwiaXRlbUF0dWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0M7QUFDcEMsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFBLDRCQUNFO0FBQUssU0FBRywrQkFBd0JBLFlBQVksQ0FBQ0MsVUFBckMsU0FBUjtBQUErRCxXQUFLLEVBQUU7QUFBRUMsb0JBQVksRUFBRTtBQUFoQjtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxTQUFiO0FBQXVCLFlBQUks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R0FBakIsQ0FBcUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ25DLGtDQUNFO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxtQkFBWUEsU0FBWixDQUFQO0FBQUEsMENBQ0U7QUFBSyx1QkFBRywrQkFBd0JBLFNBQXhCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUEsOEJBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU0EsU0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBUUQsYUFUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQTJGRDs7R0EvSHVCOUIsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOWFjYjBkYWVkZTQ0YjQ2NzZlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluR3JpZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYWluR3JpZCdcbmltcG9ydCBCb3ggZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQm94J1xuaW1wb3J0IHsgQWx1cmFrdXRNZW51LCBBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQsIE9ya3V0Tm9zdGFsZ2ljSWNvblNldCB9IGZyb20gJy4uL3NyYy9saWIvQWx1cmFrdXRDb21tb25zJztcbmltcG9ydCB7IFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZVJlbGF0aW9ucyc7XG5mdW5jdGlvbiBQcm9maWxlU2lkZWJhcihwcm9wcmllZGFkZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwiYXNpZGVcIj5cbiAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHJpZWRhZGVzLmdpdGh1YlVzZXJ9LnBuZ2B9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzhweCcgfX0gLz5cbiAgICAgIDxociAvPlxuICAgICAgPHA+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJveExpbmtcIiBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHJpZWRhZGVzLmdpdGh1YlVzZXJ9YH0+XG4gICAgICAgICAgQHtwcm9wcmllZGFkZXMuZ2l0aHViVXNlcn1cbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuICAgICAgPGhyIC8+XG4gICAgICA8QWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0IC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZmlsZVJlbGF0aW9uc0JveChwcm9wcmllZGFkZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICAgICAgICB7cHJvcHJpZWRhZGVzLnRpdGxlfSAoe3Byb3ByaWVkYWRlcy5pdGVtcy5sZW5ndGh9KVxuICAgICAgPC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAgey8qIHtzZWd1aWRvcmVzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbH0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHtpdGVtQXR1YWx9LnBuZ2B9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtQXR1YWwuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9KX0gKi99XG4gICAgICA8L3VsPlxuICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgdXN1YXJpb0FsZWF0b3JpbyA9ICdyYWZhZWxzY2h3YW50ZXMnO1xuICBjb25zdCBbY29tdW5pZGFkZXMsIHNldENvbXVuaWRhZGVzXSA9IFJlYWN0LnVzZVN0YXRlKFt7XG4gICAgaWQ6ICcxMjgwMjM3ODEyMzc4OTM3ODkxMjc4OTc4OTEyMzg5NjEyMycsIFxuICAgIHRpdGxlOiAnRXUgb2RlaW8gYWNvcmRhciBjZWRvJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vYWx1cmFrdXQudmVyY2VsLmFwcC9jYXBhLWNvbXVuaWRhZGUtMDEuanBnJ1xuICB9XSk7XG4gIC8vIGNvbnN0IGNvbXVuaWRhZGVzID0gY29tdW5pZGFkZXNbMF07XG4gIC8vIGNvbnN0IGFsdGVyYWRvckRlQ29tdW5pZGFkZXMvc2V0Q29tdW5pZGFkZXMgPSBjb211bmlkYWRlc1sxXTtcblxuICAvLyBjb25zdCBjb211bmlkYWRlcyA9IFsnQWx1cmFrdXQnXTtcbiAgY29uc3QgcGVzc29hc0Zhdm9yaXRhcyA9IFtcbiAgICAncmFmYWVsc2Nod2FudGVzJyxcbiAgICAncmFmYWVsc2Nod2FudGVzJyxcbiAgICAncmFmYWVsc2Nod2FudGVzJyxcbiAgICAncmFmYWVsc2Nod2FudGVzJyxcbiAgICAncmFmYWVsc2Nod2FudGVzJyxcbiAgICAncmFmYWVsc2Nod2FudGVzJyxcbiAgXVxuICBjb25zdCBbc2VndWlkb3Jlcywgc2V0U2VndWlkb3Jlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIC8vIDAgLSBQZWdhciBvIGFycmF5IGRlIGRhZG9zIGRvIGdpdGh1YiBcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3BlYXMvZm9sbG93ZXJzJylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9zdGFEb1NlcnZpZG9yKSB7XG4gICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZpZG9yLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3Bvc3RhQ29tcGxldGEpIHtcbiAgICAgIHNldFNlZ3VpZG9yZXMocmVzcG9zdGFDb21wbGV0YSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc29sZS5sb2coJ3NlZ3VpZG9yZXMgYW50ZXMgZG8gcmV0dXJuJywgc2VndWlkb3Jlcyk7XG5cbiAgLy8gMSAtIENyaWFyIHVtIGJveCBxdWUgdmFpIHRlciB1bSBtYXAsIGJhc2VhZG8gbm9zIGl0ZW1zIGRvIGFycmF5XG4gIC8vIHF1ZSBwZWdhbW9zIGRvIEdpdEh1YlxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBbHVyYWt1dE1lbnUgLz5cbiAgICAgIDxNYWluR3JpZD5cbiAgICAgICAgey8qIDxCb3ggc3R5bGU9XCJncmlkLWFyZWE6IHByb2ZpbGVBcmVhO1wiPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQXJlYVwiIHN0eWxlPXt7IGdyaWRBcmVhOiAncHJvZmlsZUFyZWEnIH19PlxuICAgICAgICAgIDxQcm9maWxlU2lkZWJhciBnaXRodWJVc2VyPXt1c3VhcmlvQWxlYXRvcmlvfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lQXJlYVwiIHN0eWxlPXt7IGdyaWRBcmVhOiAnd2VsY29tZUFyZWEnIH19PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgQmVtIHZpbmRvKGEpIFxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxPcmt1dE5vc3RhbGdpY0ljb25TZXQgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+TyBxdWUgdm9jw6ogZGVzZWphIGZhemVyPzwvaDI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZnVuY3Rpb24gaGFuZGxlQ3JpYUNvbXVuaWRhZGUoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYWRvc0RvRm9ybSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybS5nZXQoJ3RpdGxlJykpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm0uZ2V0KCdpbWFnZScpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlID0ge1xuICAgICAgICAgICAgICAgICAgaWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYWRvc0RvRm9ybS5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICAgICAgICBpbWFnZTogZGFkb3NEb0Zvcm0uZ2V0KCdpbWFnZScpLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlc0F0dWFsaXphZGFzID0gWy4uLmNvbXVuaWRhZGVzLCBjb211bmlkYWRlXTtcbiAgICAgICAgICAgICAgICBzZXRDb211bmlkYWRlcyhjb211bmlkYWRlc0F0dWFsaXphZGFzKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YWwgdmFpIHNlciBvIG5vbWUgZGEgc3VhIGNvbXVuaWRhZGU/XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBzdWEgY29tdW5pZGFkZT9cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbG9xdWUgdW1hIFVSTCBwYXJhIHVzYXJtb3MgZGUgY2FwYVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvbG9xdWUgdW1hIFVSTCBwYXJhIHVzYXJtb3MgZGUgY2FwYVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgQ3JpYXIgY29tdW5pZGFkZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVJlbGF0aW9uc0FyZWFcIiBzdHlsZT17eyBncmlkQXJlYTogJ3Byb2ZpbGVSZWxhdGlvbnNBcmVhJyB9fT5cbiAgICAgICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveCB0aXRsZT1cIlNlZ3VpZG9yZXNcIiBpdGVtcz17c2VndWlkb3Jlc30gLz5cbiAgICAgICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICAgICAgICAgICAgICBDb211bmlkYWRlcyAoe2NvbXVuaWRhZGVzLmxlbmd0aH0pXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7Y29tdW5pZGFkZXMubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC91c2Vycy8ke2l0ZW1BdHVhbC50aXRsZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbUF0dWFsLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWwudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cbiAgICAgICAgICAgICAgUGVzc29hcyBkYSBjb211bmlkYWRlICh7cGVzc29hc0Zhdm9yaXRhcy5sZW5ndGh9KVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Blc3NvYXNGYXZvcml0YXMubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC91c2Vycy8ke2l0ZW1BdHVhbH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWFpbkdyaWQ+XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9