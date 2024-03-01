"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
var mongoose = require("mongoose");
var morgan = require("morgan");
var chalk = require("chalk");
var http = require("http");
var app_constant_1 = require("./app.constant");
var app_router_1 = require("./app.router");
var error_handler_1 = require("./middlewares/error-handler");
// Server class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
    }
    Server.prototype.initializeApp = function () {
        this.config();
        return this.app;
    }
    Server.prototype.connectDatabase = function () {
        // set up mongoose
        console.log("Connecting to DB....");
        mongoose
            .connect(app_constant_1.MONGOOSE_URI_DIRECT, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        })
            .then(function () { return console.log("Dabatase connected."); })
            .catch(function (e) { return console.log("Error connection db.", e); });
        //mongoose.set("useCreateIndex", true);
    };
    Server.prototype.morganChalk = function () {
        return morgan(function (tokens, req, res) {
            var logs = [];
            logs.push(chalk.yellow(tokens.method(req, res)), chalk.blue(tokens.url(req, res)), chalk.green(tokens.status(req, res)), tokens["response-time"](req, res) + " ms\n");
            if (req.body && Object.keys(req.body).length > 0) {
                logs.push(chalk.gray("body", JSON.stringify(req.body), "\n"));
            }
            if (req.params && Object.keys(req.params).length > 0) {
                logs.push(chalk.red("params", JSON.stringify(req.params), "\n"));
            }
            if (req.query && Object.keys(req.query).length > 0) {
                logs.push(chalk.blue("query", JSON.stringify(req.query)));
            }
            return logs.join(" ");
        });
    };
    Server.prototype.use = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.app).use.apply(_a, args);
    };
    Server.prototype.useStatic = function (target, folder) {
        this.app.use(target, express.static(path.join(process.cwd(), folder)));
    };
    Server.prototype.useMiddlewareOn = function (path, func) {
        this.app.use(path, func);
    };
    Server.prototype.config = function () {
        this.connectDatabase();
        this.use(cors());
        this.use(bodyParser.json({ limit: app_constant_1.BODY_PARSER_LIMIT }));
        this.use(bodyParser.urlencoded({ limit: app_constant_1.BODY_PARSER_LIMIT, extended: true }));
        this.use(this.morganChalk());
        this.useStatic("/public", "public");
        this.useStatic("/upload", "upload");
        this.useStatic("/dashboard", app_constant_1.BO_PATH);
        this.useStatic("/", app_constant_1.DIST_PATH);
        this.use(app_router_1.default);
        this.use(error_handler_1.errorHandler);
    };
    Server.prototype.bootstrap = function () {
        return http.createServer(this.app).listen(process.env.PORT || 5000, function () {
            console.log("Express server listening on port " + app_constant_1.APP_PORT);
        });
    };
    return Server;
}());
exports.default = new Server();
