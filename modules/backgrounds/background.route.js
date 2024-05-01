"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var background_controller_1 = require("./background.controller");
var BackgroundRoute = /** @class */ (function () {
    function BackgroundRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    BackgroundRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', background_controller_1.default.GetOne);
        this.router.get('', background_controller_1.default.GetAll);
        this.router.get('*', background_controller_1.default.Default);
        // POST
        this.router.post('', background_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', background_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', background_controller_1.default.UpdateOne);
    };
    return BackgroundRoute;
}());
exports.default = new BackgroundRoute().router;
