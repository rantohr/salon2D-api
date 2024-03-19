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
var stat_service_1 = require("./stat.service");
var async_handler_1 = require("../../middlewares/async-handler");
var action_model_1 = require("../actions/action.model");
var stand_service_1 = require("../stands/stand.service");
var user_service_1 = require("../users/user.service");
var StatController = /** @class */ (function () {
    function StatController() {
        var _this = this;
        this.Create = (0, async_handler_1.asyncHandler)(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.statService.create(req.body)];
                    case 1:
                        entries = _a.sent();
                        res.json({
                            success: true,
                            data: entries,
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        this.GetOne = (0, async_handler_1.asyncHandler)(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.statService.getById(req.params.id)];
                    case 1:
                        entries = _a.sent();
                        res.json({
                            success: true,
                            data: entries,
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        this.GetAll = (0, async_handler_1.asyncHandler)(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.statService.getAll()];
                    case 1:
                        entries = _a.sent();
                        res.json({
                            success: true,
                            data: entries,
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        this.UpdateOne = (0, async_handler_1.asyncHandler)(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.statService.updateById(req.params.id, req.body)];
                    case 1:
                        entries = _a.sent();
                        res.json({
                            success: true,
                            data: entries,
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        this.DeleteOne = (0, async_handler_1.asyncHandler)(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.statService.deleteById(req.params.id)];
                    case 1:
                        entries = _a.sent();
                        res.json({
                            success: true,
                            data: entries,
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        this.GetRealtimeActivity = (0, async_handler_1.asyncHandler)(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var online_users_unofficial, fiveMinutesAgo, oneHourAgo, resp, online_users, online_users_restrict_time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, action_model_1.default.find({ dateEnd: { $exists: false } }).populate('user')];
                    case 1:
                        online_users_unofficial = _a.sent();
                        fiveMinutesAgo = (new Date()).getTime() - (5 * 60 * 1000);
                        oneHourAgo = (new Date()).getTime() - (60 * 60 * 1000);
                        resp = {
                            users: 0,
                            exhibitors: 0,
                            conferences: 0,
                            videos: 0,
                            stands: 0,
                            // totalStands: stands.length,
                            // totalUsers: users.data?.filter(e => e.role == 'Visitor' || e.role == 'Exposant')?.length,
                            usersWatchingLive: [],
                            standVisitors: {
                                organisateur: [],
                                partenaire: [],
                                platinium: [],
                                gold: [],
                                silver: [],
                                exposant: [],
                            }
                        };
                        if (online_users_unofficial) {
                            online_users = online_users_unofficial.filter(function (e) { return (e.startTimestamp - oneHourAgo) > 0; });
                            online_users_restrict_time = online_users.filter(function (e) { return (e.startTimestamp - fiveMinutesAgo) > 0; });
                            resp.users = online_users.filter(function (e) { var _a; return ((_a = e.user) === null || _a === void 0 ? void 0 : _a.role) == 'Visitor'; }).length;
                            resp.exhibitors = online_users_restrict_time.filter(function (e) { var _a; return ((_a = e.user) === null || _a === void 0 ? void 0 : _a.role) == 'Exposant' && e.bo; }).length;
                            resp.conferences = online_users.filter(function (e) { return e.locationPage == 'conference'; }).length;
                            resp.videos = online_users_restrict_time.filter(function (e) { return e.actionTargetType == 'videos' || e.actionTargetType == 'video'; }).length;
                            resp.stands = online_users_restrict_time.filter(function (e) { return e.locationPage == 'stand'; }).length;
                            online_users.forEach(function (e) {
                                var _a, _b, _c, _d, _e, _f;
                                if (e.locationPage == 'conference') {
                                    resp.usersWatchingLive.push({
                                        userId: (_a = e.user) === null || _a === void 0 ? void 0 : _a._id,
                                        userName: (_e = (_c = (_b = e.user) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : (_d = e.user) === null || _d === void 0 ? void 0 : _d.username) !== null && _e !== void 0 ? _e : (_f = e.user) === null || _f === void 0 ? void 0 : _f.email,
                                        conferenceType: e.locationId,
                                        conferenceLink: e.actionTargetId,
                                        conferenceTitle: e.actionTargetType
                                    });
                                }
                            });
                            // stands.forEach((stand: any) => {
                            //   const ownVisitors = online_users_restrict_time.filter(e => e.locationPage == 'stand' && e.locationId == stand._id).length;
                            //   const data = { standId: stand._id, standCategory: stand.category, standName: stand.name, visitors: ownVisitors}
                            //   switch (stand.category) {
                            //     case 'organisateur':
                            //       resp.standVisitors.organisateur.push(data);
                            //       break;
                            //     case 'partenaire':
                            //       resp.standVisitors.partenaire.push(data);
                            //       break;
                            //     case 'platinium sponsor':
                            //       resp.standVisitors.platinium.push(data);
                            //       break;
                            //     case 'gold sponsor':
                            //       resp.standVisitors.gold.push(data);
                            //       break;
                            //     case 'silver sponsor':
                            //       resp.standVisitors.silver.push(data);
                            //       break;
                            //     case 'exposant':
                            //       resp.standVisitors.exposant.push(data);
                            //       break;
                            //     default:
                            //       break;
                            //   }
                            // })
                        }
                        res.json(resp);
                        return [2 /*return*/];
                }
            });
        }); });
        this.GetRealtimeOnlineExhibitors = (0, async_handler_1.asyncHandler)(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var online_users, fiveMinutesAgo, online_users_restrict_time, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, action_model_1.default.find({ dateEnd: { $exists: false } }).populate('user')];
                    case 1:
                        online_users = _a.sent();
                        fiveMinutesAgo = (new Date()).getTime() - (5 * 60 * 1000);
                        online_users_restrict_time = online_users.filter(function (e) { return (e.startTimestamp - fiveMinutesAgo) > 0; });
                        resp = {
                            exhibitors: []
                        };
                        if (online_users) {
                            resp.exhibitors = online_users_restrict_time.filter(function (e) { var _a; return ((_a = e.user) === null || _a === void 0 ? void 0 : _a.role) == 'Exposant' && e.bo; });
                        }
                        res.json(resp);
                        return [2 /*return*/];
                }
            });
        }); });
        this.statService = new stat_service_1.default();
        this.standService = new stand_service_1.default();
        this.userService = new user_service_1.default();
    }
    StatController.prototype.Default = function (res) {
        res.end("Stat controller works.");
    };
    return StatController;
}());
exports.default = new StatController();
