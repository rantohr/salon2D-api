"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var StandSchema = new Schema({
    name: { type: String, trim: true },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: { type: String, trim: true },
    description: { type: String, trim: true },
    category: { type: String, trim: true },
    link: { type: String, trim: true },
    logo: { type: String, trim: true },
    rollup: { type: String, trim: true },
    phone: { type: String, trim: true },
    mail: { type: String, trim: true },
    facebook: { type: String, trim: true },
    instagram: { type: String, trim: true },
    linkdin: { type: String, trim: true },
    galery: {
        type: [{
                source: [String],
                location: String,
                order: Number,
                downloads: Number
            }]
    },
    videos: {
        type: [{
                source: String,
                location: String,
                views: Number
            }]
    },
    flyers: {
        type: [{
                source: String,
                location: String,
                downloads: Number
            }]
    },
    visitHistory: {
        type: [{
                userId: [String],
                startDate: Date,
                endDate: Date
            }]
    },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
    deleted: { type: Boolean, default: false }
}, { _id: true });
exports.default = mongoose.model("Stand", StandSchema, "stands");
