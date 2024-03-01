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
var crypto = require("crypto");
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var app_constant_1 = require("../../app.constant");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {
        type: String,
        required: false,
        trim: true,
        maxlength: [100, "Max authorized characters is 100"]
    },
    username: {
        type: String,
        required: false,
        trim: true,
        maxlength: [100, "Max authorized characters is 100"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Invalid Email",
        ],
    },
    password: {
        type: String,
        required: true,
        select: false,
        trim: true,
        minlength: [6, "Please use 6 or more characters"],
    },
    role: {
        type: String,
        default: "Visitor",
        enum: ['SuperAdmin', 'Admin', 'Exposant', 'Visitor'],
    },
    company: {
        type: String,
        required: false,
        trim: true,
    },
    sector: {
        type: String,
        required: false,
        trim: true,
    },
    city: {
        type: String,
        required: false,
        trim: true,
    },
    profilePicture: { type: String, trim: true },
    connected: {
        type: Boolean,
        default: false,
    },
    initChat: {
        type: Boolean,
        default: false,
    },
    initChatDate: {
        type: Date,
        required: false,
    },
    chatAccepted: {
        type: Boolean,
        default: false,
    },
    hasNewMessage: {
        type: Boolean,
        default: false,
    },
    chatAcceptedBy: {
        type: String,
    },
    canChat: {
        type: Boolean,
        default: false,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Number,
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
}, { _id: true });
/**
 * Crypt user password before save
 */
UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function () {
        var salt, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!this.isModified("password")) {
                        next();
                    }
                    return [4 /*yield*/, bcrypt.genSalt(10)];
                case 1:
                    salt = _b.sent();
                    _a = this;
                    return [4 /*yield*/, bcrypt.hash(this.password, salt)];
                case 2:
                    _a.password = _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
/**
 * match database password with user input
 * @return boolean value
 */
UserSchema.methods.matchPassword = function (inputPassword) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt.compare(inputPassword, this.password)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
 * generate a jwt token
 * @return jwt string signed token
 */
UserSchema.methods.generateToken = function () {
    return jwt.sign({
        _id: this._id,
        role: this.role,
    }, app_constant_1.JWT_HASH_KEY, { expiresIn: "30d" });
};
/**
 * generate and hash password reset token
 * @returns string reset password token
 */
UserSchema.methods.getResetPasswordToken = function () {
    // generate token
    var resetToken = crypto.randomBytes(20).toString("hex");
    // hash token and set resetPasswordToken field
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    // set expire
    console.log("Date.now()", Date.now());
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10m
    return resetToken;
};
exports.default = mongoose.model("User", UserSchema, "users");
