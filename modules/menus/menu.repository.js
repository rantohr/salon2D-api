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
exports.MenuRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var MenuRepository = /** @class */ (function (_super) {
    __extends(MenuRepository, _super);
    function MenuRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addMenu = function (menu) {
            return _this.create(menu);
        };
        _this.getMenus = function (query) {
            return _this.find(query);
        };
        _this.getOneMenu = function (options) {
            return _this.findOne(options);
        };
        _this.getMenuById = function (id) {
            return _this.findById(id);
        };
        _this.updateMenu = function (id, menu) {
            return _this.update(id, menu);
        };
        _this.deleteMenu = function (id) {
            return _this.delete(id);
        };
        _this.paginateMenus = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return MenuRepository;
}(base_repository_1.BaseRepository));
exports.MenuRepository = MenuRepository;
