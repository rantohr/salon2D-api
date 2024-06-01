"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SalonSchema = new Schema({
    nom: { type: Schema.Types.String, default: "" },
    affiche: { type: Schema.Types.String, default: "" },
    logo: { type: Schema.Types.String, default: "" },
    date_debut: { type: Schema.Types.String, default: "" },
    date_fin: { type: Schema.Types.String, default: "" },
    description: { type: Schema.Types.String, default: "" },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
}, { _id: true });
exports.default = mongoose.model("Salon", SalonSchema, "salon");
