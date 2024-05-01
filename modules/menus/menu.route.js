"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var menu_controller_1 = require("./menu.controller");
var MenuRoute = /** @class */ (function () {
    function MenuRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    MenuRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', menu_controller_1.default.GetOne);
        this.router.get('', menu_controller_1.default.GetAll);
        this.router.get('*', menu_controller_1.default.Default);
        // POST
        this.router.post('', menu_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', menu_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', menu_controller_1.default.UpdateOne);
    };
    return MenuRoute;
}());
exports.default = new MenuRoute().router;
