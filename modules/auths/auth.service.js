"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var crypto = require("crypto");
var app_constant_1 = require("../../app.constant");
var error_response_1 = require("../../utils/error-response");
var user_repository_1 = require("../users/user.repository");
var user_model_1 = require("../users/user.model");
var sendEmail_1 = require("../../utils/sendEmail");
var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this.signin = function (credentials) { return __awaiter(_this, void 0, void 0, function () {
            var email, password, user, isMatch, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        email = credentials.email, password = credentials.password;
                        return [4 /*yield*/, user_model_1.default.findOne({ email: email }).select("+password")];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, new error_response_1.ErrorResponse("Adresse email ou mot de passe invalide", 401)];
                        }
                        return [4 /*yield*/, user.matchPassword(password)];
                    case 2:
                        isMatch = _a.sent();
                        if (!isMatch) {
                            return [2 /*return*/, new error_response_1.ErrorResponse("Adresse email ou mot de passe invalide", 401)];
                        }
                        return [4 /*yield*/, user.save({ validateBeforeSave: false })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, user];
                    case 4:
                        error_1 = _a.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.signup = function (userPayload) { return __awaiter(_this, void 0, void 0, function () {
            var user, options, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.addUser(__assign(__assign({}, userPayload), { newUser: true }))];
                    case 1:
                        user = _a.sent();
                        options = {
                            receiver: user.email,
                            context: 'register-done',
                            data: {
                                name: user.name ? user.name : user.email,
                                email: userPayload.email,
                                password: userPayload.password,
                                resetUrl: ""
                            }
                        };
                        // await sendEmail(options);
                        // console.log('Email sent.')
                        return [2 /*return*/, {
                                success: true,
                                data: user,
                            }];
                    case 2:
                        error_2 = _a.sent();
                        console.log('ERROR CATCHED ON SIGNUP:::::', error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.signout = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findById(id)];
                    case 1:
                        user = _a.sent();
                        user.save({ validateBeforeSave: false });
                        return [2 /*return*/, {
                                success: true,
                                data: "User signed out successfully",
                            }];
                }
            });
        }); };
        this.forgotPassword = function (userEmail, app) { return __awaiter(_this, void 0, void 0, function () {
            var user, resetUrl, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.verifyUserByEmail(userEmail)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.generateResetUrl(user, app)];
                    case 2:
                        resetUrl = _a.sent();
                        return [4 /*yield*/, this.sendResetTokenEmail(user, resetUrl)];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, {
                                success: true,
                                data: result
                            }];
                    case 4:
                        error_3 = _a.sent();
                        throw error_3;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.resetPassword = function (resetToken, newPassword) { return __awaiter(_this, void 0, void 0, function () {
            var resetPasswordToken, user, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        resetPasswordToken = crypto
                            .createHash('sha256')
                            .update(resetToken)
                            .digest('hex');
                        return [4 /*yield*/, this.userRepository.getOneUser({
                                resetPasswordToken: resetPasswordToken,
                                resetPasswordExpire: { $gt: Date.now() } // check if token did not expire
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new error_response_1.ErrorResponse("Invalid token", 400);
                        }
                        user.password = newPassword;
                        user.resetPasswordToken = undefined;
                        user.resetPasswordExpire = undefined;
                        return [4 /*yield*/, user.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                success: true,
                                data: "Password updated successfully",
                            }];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.verifyUserCredentials = function (_a) {
            var email = _a.email, password = _a.password, fromBo = _a.fromBo;
            return __awaiter(_this, void 0, void 0, function () {
                var user, error_5;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            if (!email || !password) {
                                throw new error_response_1.ErrorResponse("Invalid email or password", 400);
                            }
                            return [4 /*yield*/, this.userRepository.getOneUserAndSelect({ email: email }, "password")];
                        case 1:
                            user = _b.sent();
                            console.log("user signin value", user);
                            if (!user) {
                                throw new error_response_1.ErrorResponse("User with email: " + email + " not found", 401);
                            }
                            console.log("signin atempt, is from dashboard =>", fromBo);
                            if (fromBo) {
                                console.log("trying to access dashboard =>", user.email, user.role);
                                if (user.role === "Admin" || user.role === "SuperAdmin" || user.role === "Exposant") {
                                }
                                else {
                                    throw new error_response_1.ErrorResponse("Account not allowed to access dashboard", 401);
                                }
                            }
                            return [2 /*return*/, user];
                        case 2:
                            error_5 = _b.sent();
                            throw error_5;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        this.generateResetUrl = function (user, app) { return __awaiter(_this, void 0, void 0, function () {
            var resetToken, baseUrl, resetUrl, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        resetToken = user.getResetPasswordToken();
                        return [4 /*yield*/, user.save({ validateBeforeSave: false })];
                    case 1:
                        _a.sent();
                        baseUrl = void 0;
                        switch (app) {
                            case "bo":
                                baseUrl = app_constant_1.BASE_BO_URL;
                                break;
                            case "fo":
                                baseUrl = app_constant_1.BASE_FO_URL;
                                break;
                            default:
                                throw new error_response_1.ErrorResponse("Unkown app", 400);
                        }
                        resetUrl = baseUrl + "/auth/resetpassword/" + resetToken;
                        return [2 /*return*/, resetUrl];
                    case 2:
                        error_6 = _a.sent();
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.verifyUserByEmail = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var user, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.getOneUser({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new error_response_1.ErrorResponse("User with email : " + email + " not found", 404);
                        }
                        return [2 /*return*/, user];
                    case 2:
                        error_7 = _a.sent();
                        throw error_7;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.sendResetTokenEmail = function (user, resetUrl) { return __awaiter(_this, void 0, void 0, function () {
            var options, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        options = {
                            receiver: user.email,
                            context: 'reset-token',
                            data: {
                                name: user.name ? user.name : user.email,
                                resetUrl: resetUrl
                            }
                        };
                        return [4 /*yield*/, (0, sendEmail_1.sendEmail)(options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, "Email sent"];
                    case 2:
                        error_8 = _a.sent();
                        user.resetPasswordToken = undefined;
                        user.resetPasswordExpire = undefined;
                        return [4 /*yield*/, user.save({ validateBeforeSave: false })];
                    case 3:
                        _a.sent();
                        throw new error_response_1.ErrorResponse("Error occured on server: email could not be sent", 500);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getUserByEmail = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var user, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("geting user by", email);
                        return [4 /*yield*/, this.userRepository.getOneUser({ email: email })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 2:
                        error_9 = _a.sent();
                        throw error_9;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.userRepository = new user_repository_1.UserRepository(user_model_1.default);
    }
    return AuthService;
}());
exports.default = AuthService;
