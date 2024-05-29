"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = require("./auth.service");
var async_handler_1 = require("../../middlewares/async-handler");
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.signin = (0, async_handler_1.asyncHandler)(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, error, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authService.signin(req.body)];
                    case 1:
                        user = _a.sent();
                        error = { message: "Email ou mot de passe invalide" };
                        if (user._id)
                            this.sendTokenResponse(user, res);
                        else
                            throw error;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.signup = (0, async_handler_1.asyncHandler)(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var userInfo, user, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUserByEmail(req.body.email)];
                    case 1:
                        userInfo = _a.sent();
                        if (!userInfo) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.authService.signin(req.body)];
                    case 2:
                        user = _a.sent();
                        this.sendTokenResponse(user, res);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.authService.signup(req.body)];
                    case 4:
                        user = _a.sent();
                        res.status(200).json(user);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        this.signout = (0, async_handler_1.asyncHandler)(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.signout(req.body.id)];
                    case 1:
                        response = _a.sent();
                        res.status(200).json(response);
                        return [2 /*return*/];
                }
            });
        }); });
        this.forgotPassword = (0, async_handler_1.asyncHandler)(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.forgotPassword(req.body.email, req.body.app)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [2 /*return*/];
                }
            });
        }); });
        this.resetpassword = (0, async_handler_1.asyncHandler)(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.resetPassword(req.params.token, req.body.password)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [2 /*return*/];
                }
            });
        }); });
        this.sendTokenResponse = function (user, res) {
            // generate token
            try {
                var accessToken = user.generateAccessToken();
                var refreshToken = user.generateRefreshToken();
                res.status(200).json({
                    success: true,
                    body: user,
                    accessToken: accessToken,
                    refreshToken: refreshToken
                });
            }
            catch (error) {
                throw error;
            }
        };
        this.authService = new auth_service_1.default();
    }
    return AuthController;
}());
exports.default = new AuthController();
