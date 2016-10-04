"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var user_service_1 = require('../services/user.service');
var logger_service_1 = require('../services/logger.service');
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(userService, logger, router) {
        this.userService = userService;
        this.logger = logger;
        this.router = router;
        this.authenticated = false;
        this.title = 'SPRT';
        this.authenticated = false;
    }
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        this.userService.logout().then(function (res) {
            _this.router.navigate(['/home']);
        }).catch(function (err) {
            _this.logger.logError(err);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.userService.getToken().then(function (response) {
                if (response !== "undefined" && response !== '') {
                    _this.authenticated = true;
                }
            }).catch(function (error) {
            });
        }
        catch (ex) {
            this.logger.logError(ex);
        }
    };
    // ngDoCheck(){
    //     try{
    //         console.log('Do check');
    //         this.userService.getToken().then((response) => {
    //             if(response !== "undefined" && response !== ''){
    //                 this.authenticated = true;
    //             }
    //         }).catch((error) => {
    //         });
    //     }
    //     catch(ex){
    //         this.logger.logError(ex);
    //     }
    // }
    AppComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            $('[class*="mdl-js-"]').each(function (i, element) {
                //console.log(element);
                componentHandler.upgradeElement(element);
            });
        }, 1000);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/views/app.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, logger_service_1.Logger, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map