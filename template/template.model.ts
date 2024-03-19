import * as mongoose from "mongoose";
import { ITemplate } from "./template.interface";

const Schema = mongoose.Schema;
const TemplateSchema = new Schema<ITemplate>(
  {
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, required: false },
  },
  { _id: true }
);

export default mongoose.model<ITemplate>(
  "Template",
  TemplateSchema,
  "templates"
);
