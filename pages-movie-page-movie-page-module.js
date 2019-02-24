(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movie-page-movie-page-module"],{

/***/ "./src/app/pages/movie-page/components/@init/movie-list-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/movie-page/components/@init/movie-list-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"movieList\">\n  <li *ngFor=\"let movie of movieList\"><a [routerLink]=\"['/movies/', movie.id]\">{{movie.title}}</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/pages/movie-page/components/@init/movie-list-page.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/movie-page/components/@init/movie-list-page.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllLXBhZ2UvY29tcG9uZW50cy9AaW5pdC9tb3ZpZS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/movie-page/components/@init/movie-list-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/movie-page/components/@init/movie-list-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: MovieListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageComponent", function() { return MovieListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_search_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/search-service.service */ "./src/app/search-service.service.ts");



var MovieListPageComponent = /** @class */ (function () {
    function MovieListPageComponent(MoviesService) {
        this.MoviesService = MoviesService;
    }
    MovieListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.MoviesService.fetchList().toPromise());
        var listObject = this.MoviesService.fetchList().toPromise();
        listObject.then(function (value) {
            _this.movieList = value;
        });
    };
    MovieListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list-page',
            template: __webpack_require__(/*! ./movie-list-page.component.html */ "./src/app/pages/movie-page/components/@init/movie-list-page.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-page.component.scss */ "./src/app/pages/movie-page/components/@init/movie-list-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_search_service_service__WEBPACK_IMPORTED_MODULE_2__["SearchServiceService"]])
    ], MovieListPageComponent);
    return MovieListPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie-page/components/item/item.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/movie-page/components/item/item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\">\n    <h1>{{movie.title}}</h1>\n    \n  </div>"

/***/ }),

/***/ "./src/app/pages/movie-page/components/item/item.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/movie-page/components/item/item.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllLXBhZ2UvY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/movie-page/components/item/item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/movie-page/components/item/item.component.ts ***!
  \********************************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_search_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/search-service.service */ "./src/app/search-service.service.ts");




var ItemComponent = /** @class */ (function () {
    function ItemComponent(MoviesService, route) {
        this.MoviesService = MoviesService;
        this.route = route;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var movieId = this.route.snapshot.paramMap.get('id');
        var listObject = this.MoviesService.fetchMovie(movieId).toPromise();
        listObject.then(function (value) {
            _this.movie = value;
            console.log(_this.movie);
        });
    };
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/pages/movie-page/components/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/pages/movie-page/components/item/item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_search_service_service__WEBPACK_IMPORTED_MODULE_3__["SearchServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie-page/components/not-found/not-found.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/movie-page/components/not-found/not-found.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/movie-page/components/not-found/not-found.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/movie-page/components/not-found/not-found.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllLXBhZ2UvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/movie-page/components/not-found/not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/movie-page/components/not-found/not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/movie-page/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/movie-page/components/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie-page/movie-page-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/movie-page/movie-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MovieListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageRoutingModule", function() { return MovieListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/@init/movie-list-page.component */ "./src/app/pages/movie-page/components/@init/movie-list-page.component.ts");
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/pages/movie-page/components/item/item.component.ts");





var routes = [{
        path: '',
        component: _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__["MovieListPageComponent"]
    }, {
        path: ':id',
        component: _components_item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"]
    }];
var MovieListPageRoutingModule = /** @class */ (function () {
    function MovieListPageRoutingModule() {
    }
    MovieListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MovieListPageRoutingModule);
    return MovieListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/movie-page/movie-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/movie-page/movie-page.module.ts ***!
  \*******************************************************/
/*! exports provided: MovieListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageModule", function() { return MovieListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _movie_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-page-routing.module */ "./src/app/pages/movie-page/movie-page-routing.module.ts");
/* harmony import */ var _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/@init/movie-list-page.component */ "./src/app/pages/movie-page/components/@init/movie-list-page.component.ts");
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/pages/movie-page/components/item/item.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/pages/movie-page/components/not-found/not-found.component.ts");







var MovieListPageModule = /** @class */ (function () {
    function MovieListPageModule() {
    }
    MovieListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_init_movie_list_page_component__WEBPACK_IMPORTED_MODULE_4__["MovieListPageComponent"],
                _components_item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _movie_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["MovieListPageRoutingModule"]
            ]
        })
    ], MovieListPageModule);
    return MovieListPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-movie-page-movie-page-module.js.map