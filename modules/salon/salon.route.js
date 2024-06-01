"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var salon_controller_1 = require("./salon.controller");
var SalonRoute = /** @class */ (function () {
    function SalonRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    SalonRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', salon_controller_1.default.GetOne);
        this.router.get('', salon_controller_1.default.GetAll);
        this.router.get('*', salon_controller_1.default.Default);
        // POST
        this.router.post('', salon_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', salon_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', salon_controller_1.default.UpdateOne);
    };
    return SalonRoute;
}());
exports.default = new SalonRoute().router;
