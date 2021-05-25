(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editores-editores-module"],{

/***/ "80xe":
/*!******************************************************************!*\
  !*** ./src/app/secciones/editores/acciones/new/new.component.ts ***!
  \******************************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NewComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewComponent.ɵfac = function NewComponent_Factory(t) { return new (t || NewComponent)(); };
NewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewComponent, selectors: [["app-new"]], decls: 2, vars: 0, template: function NewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nueva Editorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "8uAX":
/*!************************************************************************!*\
  !*** ./src/app/secciones/editores/acciones/listar/listar.component.ts ***!
  \************************************************************************/
/*! exports provided: ListarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarComponent", function() { return ListarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ListarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListarComponent.ɵfac = function ListarComponent_Factory(t) { return new (t || ListarComponent)(); };
ListarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListarComponent, selectors: [["app-listar"]], decls: 2, vars: 0, template: function ListarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "listar Editores!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "9cby":
/*!**********************************************************************!*\
  !*** ./src/app/secciones/editores/estructura/menu/menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 15, vars: 0, consts: [[1, "list-group"], [1, "list-group-item"], ["routerLink", "/editores/listar"], ["routerLink", "/editores/create"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu Editores!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Listar Editores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Insertar Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "A third item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "A fourth item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "And a fifth one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "EDyG":
/*!**********************************************************!*\
  !*** ./src/app/secciones/editores/editores.component.ts ***!
  \**********************************************************/
/*! exports provided: EditoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditoresComponent", function() { return EditoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _estructura_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estructura/menu/menu.component */ "9cby");
/* harmony import */ var _estructura_cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estructura/cuerpo/cuerpo.component */ "qyV6");



class EditoresComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditoresComponent.ɵfac = function EditoresComponent_Factory(t) { return new (t || EditoresComponent)(); };
EditoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditoresComponent, selectors: [["app-editores"]], decls: 5, vars: 0, consts: [[1, "section-title"], [1, "section-menu"], [1, "section-cuerpo"]], template: function EditoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seccion de Editoriales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cuerpo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_estructura_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _estructura_cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_2__["CuerpoComponent"]], styles: ["@media only screen and (min-width: 600px) {\n  section[_ngcontent-%COMP%] {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 50px 50px auto;\n    grid-template-columns: 25% 72%;\n    grid-gap: 3px;\n    padding: 5px;\n    grid-template-areas: \"sec  sec\" \"bread  bread\" \"menu  cuerpo\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0b3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSw2REFDSTtFQUZSO0FBQ0YiLCJmaWxlIjoiZWRpdG9yZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDUwcHggYXV0bztcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzIlO1xyXG4gICAgICBncmlkLWdhcDogM3B4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICBcInNlYyAgc2VjXCJcclxuICAgICAgICAgIFwiYnJlYWQgIGJyZWFkXCJcclxuICAgICAgICAgIFwibWVudSAgY3VlcnBvXCJcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ "V9C5":
/*!*******************************************************!*\
  !*** ./src/app/secciones/editores/editores.module.ts ***!
  \*******************************************************/
/*! exports provided: EditoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditoresModule", function() { return EditoresModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _editores_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editores-routing.module */ "n5nu");
/* harmony import */ var _editores_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editores.component */ "EDyG");
/* harmony import */ var _estructura_cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estructura/cuerpo/cuerpo.component */ "qyV6");
/* harmony import */ var _estructura_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estructura/menu/menu.component */ "9cby");
/* harmony import */ var _acciones_new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acciones/new/new.component */ "80xe");
/* harmony import */ var _acciones_listar_listar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acciones/listar/listar.component */ "8uAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class EditoresModule {
}
EditoresModule.ɵfac = function EditoresModule_Factory(t) { return new (t || EditoresModule)(); };
EditoresModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: EditoresModule });
EditoresModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _editores_routing_module__WEBPACK_IMPORTED_MODULE_1__["EditoresRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EditoresModule, { declarations: [_editores_component__WEBPACK_IMPORTED_MODULE_2__["EditoresComponent"],
        _estructura_cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_3__["CuerpoComponent"],
        _estructura_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        _acciones_new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"],
        _acciones_listar_listar_component__WEBPACK_IMPORTED_MODULE_6__["ListarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _editores_routing_module__WEBPACK_IMPORTED_MODULE_1__["EditoresRoutingModule"]] }); })();


/***/ }),

/***/ "n5nu":
/*!***************************************************************!*\
  !*** ./src/app/secciones/editores/editores-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EditoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditoresRoutingModule", function() { return EditoresRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _acciones_listar_listar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acciones/listar/listar.component */ "8uAX");
/* harmony import */ var _acciones_new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acciones/new/new.component */ "80xe");
/* harmony import */ var _editores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editores.component */ "EDyG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _editores_component__WEBPACK_IMPORTED_MODULE_3__["EditoresComponent"], children: [
            { path: 'listar', component: _acciones_listar_listar_component__WEBPACK_IMPORTED_MODULE_1__["ListarComponent"] },
            { path: 'create', component: _acciones_new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] }
        ] }
];
class EditoresRoutingModule {
}
EditoresRoutingModule.ɵfac = function EditoresRoutingModule_Factory(t) { return new (t || EditoresRoutingModule)(); };
EditoresRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EditoresRoutingModule });
EditoresRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EditoresRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "qyV6":
/*!**************************************************************************!*\
  !*** ./src/app/secciones/editores/estructura/cuerpo/cuerpo.component.ts ***!
  \**************************************************************************/
/*! exports provided: CuerpoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuerpoComponent", function() { return CuerpoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class CuerpoComponent {
    constructor() { }
    ngOnInit() {
    }
}
CuerpoComponent.ɵfac = function CuerpoComponent_Factory(t) { return new (t || CuerpoComponent)(); };
CuerpoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CuerpoComponent, selectors: [["app-cuerpo"]], decls: 1, vars: 0, template: function CuerpoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWVycG8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=editores-editores-module.js.map