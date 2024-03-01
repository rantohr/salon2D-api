"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("./auth.controller");
var AuthRoute = /** @class */ (function () {
    function AuthRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    AuthRoute.prototype.routes = function () {
        // POST
        this.router.post('/signin', auth_controller_1.default.signin);
        this.router.post('/signout', auth_controller_1.default.signout);
        this.router.post('/signup', auth_controller_1.default.signup);
        this.router.post('/forgotpassword', auth_controller_1.default.forgotPassword);
        this.router.put('/resetpassword/:token', auth_controller_1.default.resetpassword);
    };
    return AuthRoute;
}());
exports.default = new AuthRoute().router;
