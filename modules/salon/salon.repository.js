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
exports.SalonRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var SalonRepository = /** @class */ (function (_super) {
    __extends(SalonRepository, _super);
    function SalonRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addSalon = function (salon) {
            return _this.create(salon);
        };
        _this.getSalons = function (query) {
            return _this.find(query);
        };
        _this.getOneSalon = function (options) {
            return _this.findOne(options);
        };
        _this.getSalonById = function (id) {
            return _this.findById(id);
        };
        _this.updateSalon = function (id, salon) {
            return _this.update(id, salon);
        };
        _this.deleteSalon = function (id) {
            return _this.delete(id);
        };
        _this.paginateSalons = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return SalonRepository;
}(base_repository_1.BaseRepository));
exports.SalonRepository = SalonRepository;
