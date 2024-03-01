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
exports.NetworkingRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var NetworkingRepository = /** @class */ (function (_super) {
    __extends(NetworkingRepository, _super);
    function NetworkingRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addNetworking = function (networking) {
            return _this.create(networking);
        };
        _this.getNetworkings = function (query) {
            return _this.find(query);
        };
        _this.getOneNetworking = function (options) {
            return _this.findOne(options);
        };
        _this.getNetworkingById = function (id) {
            return _this.findById(id);
        };
        _this.updateNetworking = function (id, networking) {
            return _this.update(id, networking);
        };
        _this.deleteNetworking = function (id) {
            return _this.delete(id);
        };
        _this.paginateNetworkings = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return NetworkingRepository;
}(base_repository_1.BaseRepository));
exports.NetworkingRepository = NetworkingRepository;
