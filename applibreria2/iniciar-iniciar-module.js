(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iniciar-iniciar-module"],{

/***/ "+jn3":
/*!*****************************************************!*\
  !*** ./src/app/secciones/iniciar/iniciar.module.ts ***!
  \*****************************************************/
/*! exports provided: IniciarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarModule", function() { return IniciarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _iniciar_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iniciar-routing.module */ "SL3/");
/* harmony import */ var _iniciar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iniciar.component */ "QXhn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class IniciarModule {
}
IniciarModule.ɵfac = function IniciarModule_Factory(t) { return new (t || IniciarModule)(); };
IniciarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: IniciarModule });
IniciarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _iniciar_routing_module__WEBPACK_IMPORTED_MODULE_1__["IniciarRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IniciarModule, { declarations: [_iniciar_component__WEBPACK_IMPORTED_MODULE_2__["IniciarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _iniciar_routing_module__WEBPACK_IMPORTED_MODULE_1__["IniciarRoutingModule"]] }); })();


/***/ }),

/***/ "QXhn":
/*!********************************************************!*\
  !*** ./src/app/secciones/iniciar/iniciar.component.ts ***!
  \********************************************************/
/*! exports provided: IniciarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarComponent", function() { return IniciarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IniciarComponent {
    ngOnInit() {
        throw new Error('Method not implemented.');
    }
}
IniciarComponent.ɵfac = function IniciarComponent_Factory(t) { return new (t || IniciarComponent)(); };
IniciarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IniciarComponent, selectors: [["app-iniciar"]], decls: 13, vars: 0, consts: [[1, "row", "mb-3"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "email", "id", "inputEmail3", 1, "form-control"], ["for", "inputPassword3", 1, "col-sm-2", "col-form-label"], ["type", "password", "id", "inputPassword3", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function IniciarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Iniciar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["form[_ngcontent-%COMP%] {\n  padding-top: 10%;\n  margin: auto;\n  width: 30%;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  background-color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmljaWFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtBQUFKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6ImluaWNpYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5mb3JtIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpvcmFuZ2VyZWQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "SL3/":
/*!*************************************************************!*\
  !*** ./src/app/secciones/iniciar/iniciar-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: IniciarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarRoutingModule", function() { return IniciarRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _iniciar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iniciar.component */ "QXhn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _iniciar_component__WEBPACK_IMPORTED_MODULE_1__["IniciarComponent"] }
];
class IniciarRoutingModule {
}
IniciarRoutingModule.ɵfac = function IniciarRoutingModule_Factory(t) { return new (t || IniciarRoutingModule)(); };
IniciarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IniciarRoutingModule });
IniciarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IniciarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=iniciar-iniciar-module.js.map