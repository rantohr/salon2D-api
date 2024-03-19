"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ActionSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    locationPage: { type: String, trim: true },
    locationId: { type: String, trim: true },
    date: { type: Date, default: new Date() },
    startTimestamp: { type: Number },
    endTimestamp: { type: Number },
    actionType: { type: String, trim: true, default: 'click' },
    actionTargetType: { type: String, trim: true },
    actionTargetId: { type: String, trim: true },
    dateEnd: { type: Date },
    isCurrent: { type: Boolean, default: false },
    bo: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
}, { _id: true });
exports.default = mongoose.model("Action", ActionSchema, "actions");
