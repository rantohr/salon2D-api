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
const storage_1 = require("@google-cloud/storage");
const app_constant_1 = require("../../app.constant");
const serviceAccount = {
    type: app_constant_1.GOOGLE_TYPE,
    project_id: app_constant_1.GOOGLE_PROJECT_ID,
    private_key_id: app_constant_1.GOOGLE_PRIVATE_KEY_ID,
    private_key: app_constant_1.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: app_constant_1.GOOGLE_CLIENT_EMAIL,
    client_id: app_constant_1.GOOGLE_CLIENT_ID,
    auth_uri: app_constant_1.GOOGLE_AUTH_URI,
    token_uri: app_constant_1.GOOGLE_TOKEN_URI,
    auth_provider_x509_cert_url: app_constant_1.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: app_constant_1.GOOGLE_CLIENT_X509_CERT_URL,
    universe_domain: app_constant_1.GOOGLE_UNIVERSE_DOMAIN
};
class BucketService {
    constructor(bucketName) {
        this.uploadImage = (fileBuffer, destination) => __awaiter(this, void 0, void 0, function* () {
            const file = this.bucket.file(destination);
            try {
                yield file.save(fileBuffer);
                console.log(`File uploaded to ${this.bucket.name}.`);
                const publicUrl = yield this.makeFilePublic(file);
                return publicUrl;
            }
            catch (err) {
                console.error(`Error uploading file: ${err}`);
                throw err;
            }
        });
        this.uploadFile = (fileBuffer, destination) => __awaiter(this, void 0, void 0, function* () {
            const file = this.bucket.file(destination);
            try {
                yield file.save(fileBuffer);
                const publicUrl = yield this.makeFilePublic(file);
                return { file: destination, link: publicUrl };
            }
            catch (err) {
                console.error(`Error uploading file: ${err}`);
                throw err;
            }
        });
        this.makeFilePublic = (file) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield file.makePublic();
                const publicUrl = file.publicUrl();
                return publicUrl;
            }
            catch (err) {
                console.error(`Error making file public: ${err}`);
                throw err;
            }
        });
        this.storage = new storage_1.Storage({ credentials: serviceAccount });
        this.bucket = this.storage.bucket(bucketName);
    }
}
exports.default = BucketService;
