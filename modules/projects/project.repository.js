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
exports.ProjectRepository = void 0;
var base_repository_1 = require("../../base-repository/base.repository");
var ProjectRepository = /** @class */ (function (_super) {
    __extends(ProjectRepository, _super);
    function ProjectRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addProject = function (project) {
            return _this.create(project);
        };
        _this.getProjects = function (query) {
            return _this.find(query, 'promoteur');
        };
        _this.getOneProject = function (options) {
            return _this.findOne(options);
        };
        _this.getProjectById = function (id) {
            return _this.findById(id);
        };
        _this.updateProject = function (id, project) {
            return _this.update(id, project);
        };
        _this.deleteProject = function (id) {
            return _this.delete(id);
        };
        _this.paginateProjects = function (reqQuery, populate) {
            return _this.paginate(reqQuery, populate);
        };
        return _this;
    }
    return ProjectRepository;
}(base_repository_1.BaseRepository));
exports.ProjectRepository = ProjectRepository;
