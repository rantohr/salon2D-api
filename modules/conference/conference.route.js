"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var conference_controller_1 = require("./conference.controller");
var ConferenceRoute = /** @class */ (function () {
    function ConferenceRoute() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    ConferenceRoute.prototype.routes = function () {
        // GET
        this.router.get('/videos', conference_controller_1.default.GetVideos);
        this.router.get('/lives', conference_controller_1.default.getAllLive);
        this.router.get('/:id', conference_controller_1.default.GetOne);
        this.router.get('', conference_controller_1.default.GetAll);
        this.router.get('*', conference_controller_1.default.Default);
        // POST
        this.router.post('/live', conference_controller_1.default.StartLive);
        this.router.post('', conference_controller_1.default.Create);
        // DELETE
        this.router.delete('/:id', conference_controller_1.default.DeleteOne);
        // PUT
        this.router.put('/:id', conference_controller_1.default.UpdateOne);
        //get all video
    };
    return ConferenceRoute;
}());
exports.default = new ConferenceRoute().router;
