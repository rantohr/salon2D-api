"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TextSchema = new Schema({
    text: { type: String, trim: true },
    location: { type: String, trim: true },
    duration: { type: Number, default: -1 },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
}, { _id: true });
exports.default = mongoose.model("Text", TextSchema, "texts");
