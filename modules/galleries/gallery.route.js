"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var gallery_controller_1 = require("./gallery.controller");
var GalleryRoute = /** @class */ (function () {
    function GalleryRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    GalleryRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', gallery_controller_1.default.GetOne);
        this.router.get('', gallery_controller_1.default.GetAll);
        this.router.get('*', gallery_controller_1.default.Default);
        // POST
        this.router.post('', gallery_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', gallery_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', gallery_controller_1.default.UpdateOne);
    };
    return GalleryRoute;
}());
exports.default = new GalleryRoute().router;
