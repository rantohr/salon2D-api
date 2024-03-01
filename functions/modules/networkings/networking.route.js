"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var networking_controller_1 = require("./networking.controller");
var NetworkingRoute = /** @class */ (function () {
    function NetworkingRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    NetworkingRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', networking_controller_1.default.GetOne);
        this.router.get('', networking_controller_1.default.GetAll);
        this.router.get('*', networking_controller_1.default.Default);
        // POST
        this.router.post('', networking_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', networking_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', networking_controller_1.default.UpdateOne);
    };
    return NetworkingRoute;
}());
exports.default = new NetworkingRoute().router;
