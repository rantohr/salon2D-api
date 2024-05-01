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
exports.BackgroundRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var BackgroundRepository = /** @class */ (function (_super) {
    __extends(BackgroundRepository, _super);
    function BackgroundRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addBackground = function (background) {
            return _this.create(background);
        };
        _this.getBackgrounds = function (query) {
            return _this.find(query);
        };
        _this.getOneBackground = function (options) {
            return _this.findOne(options);
        };
        _this.getBackgroundById = function (id) {
            return _this.findById(id);
        };
        _this.updateBackground = function (id, background) {
            return _this.update(id, background);
        };
        _this.deleteBackground = function (id) {
            return _this.delete(id);
        };
        _this.paginateBackgrounds = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return BackgroundRepository;
}(base_repository_1.BaseRepository));
exports.BackgroundRepository = BackgroundRepository;
