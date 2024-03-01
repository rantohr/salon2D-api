"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var text_controller_1 = require("./text.controller");
var TextRoute = /** @class */ (function () {
    function TextRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    TextRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', text_controller_1.default.GetOne);
        this.router.get('', text_controller_1.default.GetAll);
        this.router.get('*', text_controller_1.default.Default);
        // POST
        this.router.post('', text_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', text_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', text_controller_1.default.UpdateOne);
    };
    return TextRoute;
}());
exports.default = new TextRoute().router;
