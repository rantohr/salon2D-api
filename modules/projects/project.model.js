"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
    title: { type: String, trim: true },
    category: { type: String, trim: true },
    description: { type: String, trim: true },
    image: { type: String, trim: true },
    promoteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    galery: { type: String, trim: true },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
}, { _id: true });
exports.default = mongoose.model("Project", ProjectSchema, "projects");
