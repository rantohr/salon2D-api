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
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var error_response_1 = require("../utils/error-response");
var errorHandler = function (err, req, res, next) {
    var error = __assign({}, err);
    error.message = err.message;
    // Log error to console for dev
    console.log(err);
    // Mongoose bad ObjectId
    if (err.name === "CastError") {
        var message = "Resource not found, bad objectId";
        error = new error_response_1.ErrorResponse(message, 404);
    }
    //Mongoose duplicate key
    if (err.code === 11000) {
        var message = "Email d\u00E9j\u00E0 existant";
        error = new error_response_1.ErrorResponse(message, 400);
    }
    //Mongoose Validation Error
    if (err.name === "ValidationError") {
        var message = Object.values(err.errors).map(function (val) { return val.message; });
        error = new error_response_1.ErrorResponse(message, 400);
    }
    // send error object
    res.status(error.statusCode || 500).json({
        success: false,
        errorMessage: error.message || "Server Error",
    });
};
exports.errorHandler = errorHandler;
