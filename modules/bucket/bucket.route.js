"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bucket_controller_1 = require("./bucket.controller");
var BucketRoute = /** @class */ (function () {
    function BucketRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    BucketRoute.prototype.routes = function () {
        // GET
        this.router.get('*', bucket_controller_1.default.Default);
        // POST
        this.router.post('/uploadImage', bucket_controller_1.default.UploadImage);
        this.router.post('/uploadFile', bucket_controller_1.default.UploadFile);
    };
    return BucketRoute;
}());
exports.default = new BucketRoute().router;
