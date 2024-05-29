"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("./user.controller");
var authorization_1 = require("../../middlewares/authorization");
var UserRoute = /** @class */ (function () {
    function UserRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    UserRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', authorization_1.auth.protect, authorization_1.auth.authorize(["Exposant"]), user_controller_1.default.GetOne);
        this.router.get('', authorization_1.auth.protect, user_controller_1.default.GetAll);
        this.router.get('*', user_controller_1.default.Default);
        // POST
        this.router.post('', user_controller_1.default.Create);
        this.router.post('/pleaseConnect', user_controller_1.default.PleaseConnect);
        // DELETE
        this.router.delete('/:id', user_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', user_controller_1.default.UpdateOne);
    };
    return UserRoute;
}());
exports.default = new UserRoute().router;
