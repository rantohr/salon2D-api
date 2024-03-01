var path = require("path");
var express_1 = require("express");
var app_constant_1 = require("./app.constant");
var user_route_1 = require("./modules/users/user.route");
var stand_route_1 = require("./modules/stands/stand.route");
var text_route_1 = require("./modules/texts/text.route");
var auth_route_1 = require("./modules/auths/auth.route");
var conference_route_1 = require("./modules/conference/conference.route");
var action_route_1 = require("./modules/actions/action.route");
var stat_route_1 = require("./modules/stats/stat.route");
var upload_route_1 = require("./modules/upload/upload.route");
var networking_route_1 = require("./modules/networkings/networking.route");
var project_route_1 = require("./modules/projects/project.route");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    AppRouter.prototype.routes = function () {
        // API ROUTES
        this.router.use('/api/users', user_route_1.default);
        this.router.use('/api/stands', stand_route_1.default);
        this.router.use('/api/texts', text_route_1.default);
        this.router.use('/api/auth', auth_route_1.default);
        this.router.use('/api/conferences', conference_route_1.default);
        this.router.use('/api/actions', action_route_1.default);
        this.router.use('/api/stats', stat_route_1.default);
        this.router.use('/api/upload', upload_route_1.default);
        this.router.use('/api/networking', networking_route_1.default);
        this.router.use('/api/projects', project_route_1.default);
        this.router.use('/', function (req, res) {
            return res.sendFile(path.join(process.cwd(), app_constant_1.DIST_PATH + "/index.html"));
        });
    };
    return AppRouter;
}());
exports.default = new AppRouter().router;
