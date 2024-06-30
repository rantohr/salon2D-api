"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bucket_service_1 = require("./bucket.service");
const async_handler_1 = require("../../middlewares/async-handler");
class BucketController {
    constructor() {
        this.Default = (req, res) => {
            res.end('Bucket controller works.');
        };
        this.UploadImage = (0, async_handler_1.asyncHandler)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { fileBuffer, destination } = req.body;
            if (!fileBuffer || !destination) {
                res.status(400).send('Missing fileBuffer or destination in request body');
                return;
            }
            const publicUrl = yield this.bucketService.uploadImage(Buffer.from(fileBuffer, 'base64'), destination);
            res.status(200).send(publicUrl);
        }));
        this.UploadFile = (0, async_handler_1.asyncHandler)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { fileBuffer, destination } = req.body;
            if (!fileBuffer || !destination) {
                res.status(400).send('Missing fileBuffer or destination in request body');
                return;
            }
            const result = yield this.bucketService.uploadFile(Buffer.from(fileBuffer, 'base64'), destination);
            res.json(result);
        }));
        this.bucketService = new bucket_service_1.default('bucket_vibees_dev');
    }
}
exports.default = new BucketController();
