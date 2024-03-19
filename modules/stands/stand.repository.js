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
exports.StandRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var StandRepository = /** @class */ (function (_super) {
    __extends(StandRepository, _super);
    function StandRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addStand = function (stand) {
            return _this.create(stand);
        };
        _this.getStands = function (query) {
            return _this.find(query, 'owner');
        };
        _this.getOneStand = function (options) {
            return _this.findOne(options);
        };
        _this.getStandById = function (id) {
            return _this.findById(id, 'owner');
        };
        _this.updateStand = function (id, stand) {
            return _this.update(id, stand);
        };
        _this.deleteStand = function (id) {
            return _this.delete(id);
        };
        _this.paginateStands = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return StandRepository;
}(base_repository_1.BaseRepository));
exports.StandRepository = StandRepository;
