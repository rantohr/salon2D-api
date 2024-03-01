"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NetworkingSchema = new Schema({
    subject: { type: String, trim: true },
    desc: { type: String, trim: true },
    maxUsers: { type: Number, default: 0 },
    chat_id: { type: String, trim: true, default: "" },
    users_id: { type: [String], default: [] },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
}, { _id: true });
exports.default = mongoose.model("Networking", NetworkingSchema, "networkings");
