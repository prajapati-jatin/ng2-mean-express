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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var logger_service_1 = require('./logger.service');
var UserService = (function () {
    function UserService(logger, http) {
        this.logger = logger;
        this.http = http;
    }
    ;
    UserService.prototype.authenticate = function (username, password) {
        var authUrl = '/api/users/authenticate';
        var body = JSON.stringify({ username: username, password: password });
        return this.http.post(authUrl, body, this.getRequestOptions())
            .toPromise()
            .then(function (response) {
            var body = response.json();
            return body || {};
        });
        // .catch((error) => {
        //     this.logger.log('Auth error');
        //     this.logError(error);
        //     throw new Error("Invalid credentials");
        // });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        var url = '/logout';
        return this.http.get(url).toPromise().then(function (res) {
            _this.logger.log('Logout response: ' + res.status);
            var body = res.statusText;
            return body || {};
        }).catch(function (err) {
            _this.logError(err);
        });
    };
    UserService.prototype.getToken = function () {
        var _this = this;
        var url = '/token';
        return this.http.get(url, this.getRequestOptions()).toPromise().then(function (response) {
            var body = response.text();
            return body;
        }).catch(function (error) {
            var errorMessage = _this.logError(error);
            return Promise.reject(errorMessage);
        });
    };
    UserService.prototype.logError = function (error) {
        var errorMessage = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        this.logger.logError(errorMessage);
        return errorMessage;
    };
    UserService.prototype.getRequestOptions = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + window.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [logger_service_1.Logger, http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map