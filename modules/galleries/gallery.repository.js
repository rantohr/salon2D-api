"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var GalleryRepository = /** @class */ (function (_super) {
    __extends(GalleryRepository, _super);
    function GalleryRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addGallery = function (gallery) {
            return _this.create(gallery);
        };
        _this.getGallerys = function (query) {
            return _this.find(query);
        };
        _this.getOneGallery = function (options) {
            return _this.findOne(options);
        };
        _this.getGalleryById = function (id) {
            return _this.findById(id);
        };
        _this.updateGallery = function (id, gallery) {
            return _this.update(id, gallery);
        };
        _this.deleteGallery = function (id) {
            return _this.delete(id);
        };
        _this.paginateGallerys = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return GalleryRepository;
}(base_repository_1.BaseRepository));
exports.GalleryRepository = GalleryRepository;
