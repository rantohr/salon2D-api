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
exports.TextRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var TextRepository = /** @class */ (function (_super) {
    __extends(TextRepository, _super);
    function TextRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addText = function (text) {
            return _this.create(text);
        };
        _this.getTexts = function (query) {
            return _this.find(query);
        };
        _this.getOneText = function (options) {
            return _this.findOne(options);
        };
        _this.getTextById = function (id) {
            return _this.findById(id);
        };
        _this.updateText = function (id, text) {
            return _this.update(id, text);
        };
        _this.deleteText = function (id) {
            return _this.delete(id);
        };
        _this.paginateTexts = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return TextRepository;
}(base_repository_1.BaseRepository));
exports.TextRepository = TextRepository;
