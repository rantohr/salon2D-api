"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var action_controller_1 = require("./action.controller");
var ActionRoute = /** @class */ (function () {
    function ActionRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    ActionRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', action_controller_1.default.GetOne);
        this.router.get('', action_controller_1.default.GetAll);
        this.router.get('*', action_controller_1.default.Default);
        // POST
        this.router.post('', action_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', action_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', action_controller_1.default.UpdateOne);
    };
    return ActionRoute;
}());
exports.default = new ActionRoute().router;
