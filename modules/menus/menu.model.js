"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var MenuSchema = new Schema({
    title: { type: String, trim: true, required: true },
    route: { type: String, trim: true, required: true },
    hidden: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
}, { _id: true });
exports.default = mongoose.model("Menu", MenuSchema, "menus");
