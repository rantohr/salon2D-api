"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var project_controller_1 = require("./project.controller");
var ProjectRoute = /** @class */ (function () {
    function ProjectRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    ProjectRoute.prototype.routes = function () {
        // GET
        this.router.get('/:id', project_controller_1.default.GetOne);
        this.router.get('', project_controller_1.default.GetAll);
        this.router.get('*', project_controller_1.default.Default);
        // POST
        this.router.post('', project_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', project_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', project_controller_1.default.UpdateOne);
    };
    return ProjectRoute;
}());
exports.default = new ProjectRoute().router;
