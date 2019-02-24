(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-page-contact-page-module"],{

/***/ "./src/app/pages/contact-page/components/contacts-page/contacts-page.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/contact-page/components/contacts-page/contacts-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contacts-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/contact-page/components/contacts-page/contacts-page.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/contact-page/components/contacts-page/contacts-page.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb21wb25lbnRzL2NvbnRhY3RzLXBhZ2UvY29udGFjdHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/contact-page/components/contacts-page/contacts-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/contact-page/components/contacts-page/contacts-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ContactsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageComponent", function() { return ContactsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsPageComponent = /** @class */ (function () {
    function ContactsPageComponent() {
    }
    ContactsPageComponent.prototype.ngOnInit = function () {
    };
    ContactsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts-page',
            template: __webpack_require__(/*! ./contacts-page.component.html */ "./src/app/pages/contact-page/components/contacts-page/contacts-page.component.html"),
            styles: [__webpack_require__(/*! ./contacts-page.component.scss */ "./src/app/pages/contact-page/components/contacts-page/contacts-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsPageComponent);
    return ContactsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-page/contact-page-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contacts-page/contacts-page.component */ "./src/app/pages/contact-page/components/contacts-page/contacts-page.component.ts");




var routes = [{
        path: '',
        component: _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactsPageComponent"]
    }];
var ContactPageRoutingModule = /** @class */ (function () {
    function ContactPageRoutingModule() {
    }
    ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContactPageRoutingModule);
    return ContactPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contacts-page/contacts-page.component */ "./src/app/pages/contact-page/components/contacts-page/contacts-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-page-routing.module */ "./src/app/pages/contact-page/contact-page-routing.module.ts");





var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_2__["ContactsPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _contact_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactPageRoutingModule"]
            ]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contact-page-contact-page-module.js.map