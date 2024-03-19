"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var StatSchema = new Schema({
    onlineUsersPerHours: {
        date: Date,
        hour: String,
        count: Number
    },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
}, { _id: true });
exports.default = mongoose.model("Stat", StatSchema, "stats");
