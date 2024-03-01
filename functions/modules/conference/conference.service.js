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
var ApiVideoClient = require("@api.video/nodejs-client");
var app_constant_1 = require("../../app.constant");
var error_response_1 = require("../../utils/error-response");
var conference_model_1 = require("./conference.model");
var conference_repository_1 = require("./conference.repository");
var ConferenceService = /** @class */ (function () {
    function ConferenceService() {
        var _this = this;
        this.create = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var conference, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.conferenceRepository.addConference(payload)];
                    case 1:
                        conference = _a.sent();
                        return [2 /*return*/, conference];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAll = function (query) { return __awaiter(_this, void 0, void 0, function () {
            var conference, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.conferenceRepository.getConferences(query)];
                    case 1:
                        conference = _a.sent();
                        return [2 /*return*/, conference];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var conference, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.conferenceRepository.getConferenceById(id)];
                    case 1:
                        conference = _a.sent();
                        return [2 /*return*/, conference];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.deleteById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.conferenceRepository.deleteConference(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, "Conference removed successfully"];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateById = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var image, name, link, presenter, date, status, description, duree, streamKey, conference, userUpdated, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        image = payload.image, name = payload.name, link = payload.link, presenter = payload.presenter, date = payload.date, status = payload.status, description = payload.description, duree = payload.duree, streamKey = payload.streamKey;
                        if (!payload.updatedAt)
                            payload.updatedAt = Date.now();
                        return [4 /*yield*/, this.conferenceRepository.getConferenceById(id)];
                    case 1:
                        conference = _a.sent();
                        if (!conference) {
                            throw new error_response_1.ErrorResponse("None user deleted", 400);
                        }
                        return [4 /*yield*/, this.conferenceRepository.updateConference(id, { image: image, name: name, link: link, presenter: presenter, date: date, status: status, description: description, duree: duree, streamKey: streamKey })];
                    case 2:
                        userUpdated = _a.sent();
                        return [2 /*return*/, userUpdated];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getAllVideo = function (query) { return __awaiter(_this, void 0, void 0, function () {
            var client, res, currentPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new ApiVideoClient({ apiKey: app_constant_1.API_KEY_LIVE });
                        res = null;
                        currentPage = 1;
                        _a.label = 1;
                    case 1: return [4 /*yield*/, client.videos.list(__assign(__assign({}, query), { currentPage: currentPage }))];
                    case 2:
                        res = _a.sent();
                        if (currentPage >= res.pagination.pagesTotal) {
                            return [3 /*break*/, 4];
                        }
                        _a.label = 3;
                    case 3:
                        currentPage++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, { count: 0, results: res.data }];
                }
            });
        }); };
        this.startLive = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var client, liveStream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new ApiVideoClient({ apiKey: app_constant_1.API_KEY_LIVE });
                        return [4 /*yield*/, client.liveStreams.create(payload)];
                    case 1:
                        liveStream = _a.sent();
                        return [2 /*return*/, liveStream];
                }
            });
        }); };
        this.getAllLive = function (query) { return __awaiter(_this, void 0, void 0, function () {
            var client, liveStreams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new ApiVideoClient({ apiKey: app_constant_1.API_KEY_LIVE });
                        return [4 /*yield*/, client.liveStreams.list(query)];
                    case 1:
                        liveStreams = _a.sent();
                        return [2 /*return*/, { count: 0, results: liveStreams }];
                }
            });
        }); };
        this.conferenceRepository = new conference_repository_1.ConferenceRepository(conference_model_1.default);
    }
    return ConferenceService;
}());
exports.default = ConferenceService;
