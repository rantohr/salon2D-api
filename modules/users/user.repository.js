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
exports.UserRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var UserRepository = /** @class */ (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addUser = function (user) {
            return _this.create(user);
        };
        _this.getUsers = function (query) {
            return _this.find(query);
        };
        _this.getOneUser = function (options) {
            return _this.findOne(options);
        };
        _this.getOneUserAndSelect = function (options, field) {
            return _this.findOneAndSelect(options, field);
        };
        _this.getUserById = function (id, populate) {
            return _this.findById(id, populate);
        };
        _this.updateUser = function (id, user) {
            return _this.update(id, user);
        };
        _this.deleteUser = function (id) {
            return _this.delete(id);
        };
        _this.paginateUsers = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return UserRepository;
}(base_repository_1.BaseRepository));
exports.UserRepository = UserRepository;
