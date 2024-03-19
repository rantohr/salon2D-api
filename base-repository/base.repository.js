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
exports.BaseRepository = void 0;
var BaseRepository = /** @class */ (function () {
    function BaseRepository(model) {
        this.model = model;
    }
    BaseRepository.prototype.find = function (payload, populate) {
        return __awaiter(this, void 0, void 0, function () {
            var payload_c, skip, k, query, results, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        populate = populate ? populate.split(",").join(" ") : "";
                        payload_c = JSON.parse(JSON.stringify(payload));
                        skip = (payload === null || payload === void 0 ? void 0 : payload.offset) || "0";
                        for (k in payload_c) {
                            if (payload_c.hasOwnProperty(k)) {
                                payload_c[k] = { $regex: payload_c[k], $options: 'i' };
                            }
                        }
                        query = this.model.find(__assign(__assign({}, payload), { deleted: false }));
                        query = query.skip(+skip).limit(+((payload === null || payload === void 0 ? void 0 : payload.limit) || "10"));
                        return [4 /*yield*/, query.populate(populate)];
                    case 1:
                        results = _a.sent();
                        return [4 /*yield*/, this.model.countDocuments(__assign(__assign({}, payload), { deleted: false }))];
                    case 2:
                        count = _a.sent();
                        return [2 /*return*/, { count: count, results: results }];
                }
            });
        });
    };
    BaseRepository.prototype.findOne = function (payload, populate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        populate = populate ? populate.split(",").join(" ") : "";
                        return [4 /*yield*/, this.model
                                .findOne(__assign(__assign({}, payload), { deleted: false }))
                                .populate(populate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.findOneAndSelect = function (payload, additionalField, populate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        populate = populate ? populate.split(",").join(" ") : "";
                        return [4 /*yield*/, this.model
                                .findOne(__assign(__assign({}, payload), { deleted: false }))
                                .select("" + ("+" + additionalField))
                                .populate(populate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.findById = function (id, populate) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            _id: id,
                            deleted: false
                        };
                        populate = populate ? populate.split(",").join(" ") : "";
                        return [4 /*yield*/, this.model
                                .findOne(query)
                                .populate(populate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.create(payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.update = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findByIdAndUpdate(id, payload, {
                            new: true,
                            runValidators: true,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            deleted: true,
                            updatedAt: Date.now()
                        };
                        return [4 /*yield*/, this.model.findByIdAndUpdate(id, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.countDocuments = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.countDocuments()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseRepository.prototype.paginate = function (req, populate) {
        return __awaiter(this, void 0, void 0, function () {
            var query, reqQuery, removeFields, queryString, fields, sortBy, page, limit, startIndex, endIndex, total, results, pagination;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reqQuery = __assign({}, req);
                        removeFields = ["select", "sort", "page", "limit"];
                        //Delete remeveFields from reqQuery
                        removeFields.forEach(function (element) { return delete reqQuery[element]; });
                        queryString = JSON.stringify(reqQuery);
                        // Create operator
                        queryString = queryString.replace(/\b(gt|gte|lt|lte|in)/g, function (match) { return "$" + match; });
                        /*Build query*/
                        // Find ressources
                        query = this.model.find(JSON.parse(queryString));
                        //Select Fields
                        if (req.select) {
                            fields = req.select.split(",").join(" ");
                            query = query.select(fields);
                        }
                        //Sort
                        if (req.sort) {
                            sortBy = req.sort.split(",").join(" ");
                            query = query.sort(sortBy);
                        }
                        else {
                            query = query.sort("-createdAt");
                        }
                        page = +req.page || 1;
                        limit = +req.limit || 10;
                        startIndex = (page - 1) * limit;
                        endIndex = page * limit;
                        return [4 /*yield*/, this.countDocuments()];
                    case 1:
                        total = _a.sent();
                        query = query.skip(startIndex).limit(limit);
                        if (populate) {
                            populate = populate.split(",").join(" ");
                            query = query.populate(populate);
                        }
                        return [4 /*yield*/, query];
                    case 2:
                        results = _a.sent();
                        pagination = {};
                        if (endIndex < total) {
                            pagination.next = {
                                page: page + 1,
                                limit: limit,
                            };
                        }
                        if (startIndex > 0) {
                            pagination.prev = {
                                page: page - 1,
                                limit: limit,
                            };
                        }
                        return [2 /*return*/, {
                                success: true,
                                count: results.length,
                                data: results,
                                pagination: pagination,
                            }];
                }
            });
        });
    };
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;
