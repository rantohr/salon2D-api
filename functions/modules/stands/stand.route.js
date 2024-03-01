"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var stand_controller_1 = require("./stand.controller");
var StandRoute = /** @class */ (function () {
    function StandRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    StandRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', stand_controller_1.default.GetOne);
        this.router.get('', stand_controller_1.default.GetAll);
        this.router.get('*', stand_controller_1.default.Default);
        // POST
        this.router.post('', stand_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', stand_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', stand_controller_1.default.UpdateOne);
    };
    return StandRoute;
}());
exports.default = new StandRoute().router;
