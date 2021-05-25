(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["libreria-libreria-module"],{

/***/ "PzXh":
/*!*******************************************************!*\
  !*** ./src/app/secciones/libreria/libreria.module.ts ***!
  \*******************************************************/
/*! exports provided: libreriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libreriaModule", function() { return libreriaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _libreria_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libreria-routing.module */ "YnzV");
/* harmony import */ var _libreria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libreria.component */ "nS9L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class libreriaModule {
}
libreriaModule.ɵfac = function libreriaModule_Factory(t) { return new (t || libreriaModule)(); };
libreriaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: libreriaModule });
libreriaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _libreria_routing_module__WEBPACK_IMPORTED_MODULE_1__["LibreriaRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](libreriaModule, { declarations: [_libreria_component__WEBPACK_IMPORTED_MODULE_2__["libreriaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _libreria_routing_module__WEBPACK_IMPORTED_MODULE_1__["LibreriaRoutingModule"]] }); })();


/***/ }),

/***/ "YnzV":
/*!***************************************************************!*\
  !*** ./src/app/secciones/libreria/libreria-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LibreriaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibreriaRoutingModule", function() { return LibreriaRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _libreria_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libreria.component */ "nS9L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _libreria_component__WEBPACK_IMPORTED_MODULE_1__["libreriaComponent"] }
];
class LibreriaRoutingModule {
}
LibreriaRoutingModule.ɵfac = function LibreriaRoutingModule_Factory(t) { return new (t || LibreriaRoutingModule)(); };
LibreriaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LibreriaRoutingModule });
LibreriaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LibreriaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "nS9L":
/*!**********************************************************!*\
  !*** ./src/app/secciones/libreria/libreria.component.ts ***!
  \**********************************************************/
/*! exports provided: libreriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libreriaComponent", function() { return libreriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class libreriaComponent {
    ngOnInit() {
        throw new Error('Method not implemented.');
    }
}
libreriaComponent.ɵfac = function libreriaComponent_Factory(t) { return new (t || libreriaComponent)(); };
libreriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: libreriaComponent, selectors: [["app-libreria"]], decls: 5, vars: 0, consts: [["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.483943159582!2d-1.\n        947994530200921!3d37.39135116073093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!\n        1s0x0%3A0xe878c4396c0088c6!2sBiblioteca%20P%C3%BAblica%20Municipal%20%22Gabriel%20Espinar\n        %22!5e0!3m2!1ses!2ses!4v1621468544186!5m2!1ses!2ses", "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], ["href", "https://www.google.com/maps/place/Biblioteca+P%C3%BAblica+Municipal+%22Gabriel+Espinar%22/@37.3913512,-1.9479945,19z/data=!4m9!1m2!2m1!1sbiblioteca+de+huercal+overa!3m5!1s0x0:0xe878c4396c0088c6!8m2!3d37.3916798!4d-\n        1.9477327!15sChtiaWJsaW90ZWNhIGRlIGh1ZXJjYWwgb3ZlcmGSAQ5wdWJsaWNfbGlicmFyeQ"]], template: function libreriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "biblioteca de huercal overa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 33% 33% 33%;\n  justify-items: stretch;\n  justify-content: center;\n  background-color: blue;\n}\n\ndiv[_ngcontent-%COMP%] {\n  padding: 10px;\n  align-items: center;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n}\n\ndiv[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaWJyZXJpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNSOztBQUNBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFBSiIsImZpbGUiOiJsaWJyZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MzMlIDMzJSAzMyUgO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5kaXZ7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbmRpdiBpZnJhbWV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcblxyXG59XHJcblxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=libreria-libreria-module.js.map