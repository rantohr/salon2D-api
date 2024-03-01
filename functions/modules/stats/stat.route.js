"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var stat_controller_1 = require("./stat.controller");
var StatRoute = /** @class */ (function () {
    function StatRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    StatRoute.prototype.routes = function () {
        // GET
        this.router.get('/realtime-activity', stat_controller_1.default.GetRealtimeActivity);
        this.router.get('/realtime-exhibitors', stat_controller_1.default.GetRealtimeOnlineExhibitors);
    };
    return StatRoute;
}());
exports.default = new StatRoute().router;
