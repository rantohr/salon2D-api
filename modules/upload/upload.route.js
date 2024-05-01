"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
var upload = multer({ storage: storage });
var UploadRoute = /** @class */ (function () {
    function UploadRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    UploadRoute.prototype.routes = function () {
        // this.router.post('', upload.single('file'), UploadController.uploadV2)
        this.router.post('', upload.single('file'), function (req, res) {
            var filename = req.file.filename;
            var fileUrl = "https://salon2d-api.onrender.com/public/" + filename;
            res.send(fileUrl);
        });
    };
    return UploadRoute;
}());
exports.default = new UploadRoute().router;
