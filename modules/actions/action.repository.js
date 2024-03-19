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
exports.ActionRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var ActionRepository = /** @class */ (function (_super) {
    __extends(ActionRepository, _super);
    function ActionRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addAction = function (action) {
            action.startTimestamp = (new Date()).getTime();
            return _this.create(action);
        };
        _this.getActions = function (query) {
            return _this.find(query);
        };
        _this.getOneAction = function (options) {
            return _this.findOne(options);
        };
        _this.getActionById = function (id) {
            return _this.findById(id);
        };
        _this.updateAction = function (id, action) {
            if (action.dateEnd)
                action.endTimestamp = (new Date()).getTime();
            return _this.update(id, action);
        };
        _this.deleteAction = function (id) {
            return _this.delete(id);
        };
        _this.paginateActions = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return ActionRepository;
}(base_repository_1.BaseRepository));
exports.ActionRepository = ActionRepository;
