"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bucket_controller_1 = require("./bucket.controller");
class BucketRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // GET
        this.router.get('*', bucket_controller_1.default.Default);
        // POST
        this.router.post('/uploadImage', bucket_controller_1.default.UploadImage);
        this.router.post('/uploadFile', bucket_controller_1.default.UploadFile);
    }
}
exports.default = new BucketRoute().router;
