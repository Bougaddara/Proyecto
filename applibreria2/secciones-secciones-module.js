(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["secciones-secciones-module"],{

/***/ "Bfwl":
/*!*******************************************************!*\
  !*** ./src/app/secciones/secciones-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SeccionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionesRoutingModule", function() { return SeccionesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~categorias-categorias-module~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "1GEx")).then(m => m.HomeModule) },
    { path: 'home', loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~categorias-categorias-module~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "1GEx")).then(m => m.HomeModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | iniciar-iniciar-module */ "iniciar-iniciar-module").then(__webpack_require__.bind(null, /*! ./iniciar/iniciar.module */ "+jn3")).then(m => m.IniciarModule) },
    { path: 'iniciar', loadChildren: () => __webpack_require__.e(/*! import() | iniciar-iniciar-module */ "iniciar-iniciar-module").then(__webpack_require__.bind(null, /*! ./iniciar/iniciar.module */ "+jn3")).then(m => m.IniciarModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | libreria-libreria-module */ "libreria-libreria-module").then(__webpack_require__.bind(null, /*! ./libreria/libreria.module */ "PzXh")).then(m => m.libreriaModule) },
    { path: 'libreria', loadChildren: () => __webpack_require__.e(/*! import() | libreria-libreria-module */ "libreria-libreria-module").then(__webpack_require__.bind(null, /*! ./libreria/libreria.module */ "PzXh")).then(m => m.libreriaModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | regi-regi-module */ "regi-regi-module").then(__webpack_require__.bind(null, /*! ./regi/regi.module */ "3AXn")).then(m => m.RegiModule) },
    { path: 'Regi', loadChildren: () => __webpack_require__.e(/*! import() | regi-regi-module */ "regi-regi-module").then(__webpack_require__.bind(null, /*! ./regi/regi.module */ "3AXn")).then(m => m.RegiModule) },
    { path: 'editores', loadChildren: () => __webpack_require__.e(/*! import() | editores-editores-module */ "editores-editores-module").then(__webpack_require__.bind(null, /*! ./editores/editores.module */ "V9C5")).then(m => m.EditoresModule) },
    { path: 'categorias', loadChildren: () => Promise.all(/*! import() | categorias-categorias-module */[__webpack_require__.e("default~categorias-categorias-module~home-home-module"), __webpack_require__.e("categorias-categorias-module")]).then(__webpack_require__.bind(null, /*! ./categorias/categorias.module */ "mII4")).then(m => m.CategoriasModule) }
];
class SeccionesRoutingModule {
}
SeccionesRoutingModule.ɵfac = function SeccionesRoutingModule_Factory(t) { return new (t || SeccionesRoutingModule)(); };
SeccionesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SeccionesRoutingModule });
SeccionesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SeccionesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "l4o5":
/*!***********************************************!*\
  !*** ./src/app/secciones/secciones.module.ts ***!
  \***********************************************/
/*! exports provided: SeccionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionesModule", function() { return SeccionesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _secciones_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secciones-routing.module */ "Bfwl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SeccionesModule {
}
SeccionesModule.ɵfac = function SeccionesModule_Factory(t) { return new (t || SeccionesModule)(); };
SeccionesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SeccionesModule });
SeccionesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _secciones_routing_module__WEBPACK_IMPORTED_MODULE_1__["SeccionesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SeccionesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _secciones_routing_module__WEBPACK_IMPORTED_MODULE_1__["SeccionesRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=secciones-secciones-module.js.map