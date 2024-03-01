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
var user_model_1 = require("./user.model");
var user_repository_1 = require("./user.repository");
var generator = require("generate-password");
var error_response_1 = require("../../utils/error-response");
var sendEmail_1 = require("../../utils/sendEmail");
var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        this.domain = "user";
        this.create = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var userEmailExists, password, options, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.userRepository.findOne({ email: payload.email })];
                    case 1:
                        userEmailExists = _a.sent();
                        if (userEmailExists) {
                            return [2 /*return*/, {
                                    success: false,
                                    data: "Email already exists"
                                }];
                        }
                        if (!payload.password) {
                            password = generator.generate({
                                length: 6,
                                numbers: true,
                            });
                            payload.password = password;
                        }
                        if (payload.role === "Admin" || payload.role === "Exposant") {
                            options = {
                                receiver: payload.email,
                                context: 'send-password',
                                data: {
                                    name: payload.name ? payload.name : payload.email,
                                    email: payload.email,
                                    password: payload.password,
                                    resetUrl: ""
                                }
                            };
                            // await sendEmail(options)
                        }
                        return [4 /*yield*/, this.userRepository.addUser(payload)];
                    case 2:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getAll = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.getUsers(req)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, {
                                count: users.count,
                                results: users.results,
                            }];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.getUserById(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.deleteById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var user, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.userRepository.getUserById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new error_response_1.ErrorResponse("None user deleted", 400);
                        }
                        return [4 /*yield*/, this.userRepository.deleteUser(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                success: true,
                                data: "User removed successfully",
                            }];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.updateById = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var user, userUpdated, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!payload.updatedAt)
                            payload.updatedAt = Date.now();
                        return [4 /*yield*/, this.userRepository.getUserById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new error_response_1.ErrorResponse("None user deleted", 400);
                        }
                        return [4 /*yield*/, this.userRepository.updateUser(id, payload)];
                    case 2:
                        userUpdated = _a.sent();
                        if (!(payload.currentpassword && payload.password)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.updatePassword(id, payload.currentpassword, payload.password)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, userUpdated];
                    case 5:
                        error_5 = _a.sent();
                        throw error_5;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.updatePassword = function (id, currentpassword, password) { return __awaiter(_this, void 0, void 0, function () {
            var user, isMatch, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.userRepository.getOneUserAndSelect({ _id: id }, 'password')];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, user.matchPassword(currentpassword)];
                    case 2:
                        isMatch = _a.sent();
                        if (!isMatch) {
                            throw new error_response_1.ErrorResponse('Password not match', 400);
                        }
                        user.password = password;
                        return [4 /*yield*/, user.save({ validateBeforeSave: false })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_6 = _a.sent();
                        throw error_6;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.sendMailToConnect = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var options, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            receiver: payload.receiver,
                            context: 'please-connect',
                            data: {}
                        };
                        return [4 /*yield*/, (0, sendEmail_1.sendEmail)(options)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        throw error_7;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.userRepository = new user_repository_1.UserRepository(user_model_1.default);
    }
    return UserService;
}());
exports.default = UserService;
;
// function sendEmail(options: EmailOptions) {
//     throw new Error("Function not implemented.");
// }
