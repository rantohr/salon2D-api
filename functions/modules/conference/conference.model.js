"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ConferenceSchema = new Schema({
    name: { type: String, trim: true },
    image: { type: String, trim: true },
    link: { type: String, trim: true },
    date: { type: Date, trim: true },
    description: { type: String, trim: true },
    duree: { type: Number, trim: true },
    streamKey: { type: String, trim: true },
    status: { type: String, trim: true, enum: ['Rediffusion', 'En direct', 'Bientôt'] },
    presenter: { type: String, trim: true },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
}, { _id: true });
exports.default = mongoose.model("Conference", ConferenceSchema, "conference");
