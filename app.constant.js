"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGOOSE_URI_DIRECT = exports.MONGOOSE_URI = exports.GOOGLE_UNIVERSE_DOMAIN = exports.GOOGLE_CLIENT_X509_CERT_URL = exports.GOOGLE_AUTH_PROVIDER_X509_CERT_URL = exports.GOOGLE_TOKEN_URI = exports.GOOGLE_AUTH_URI = exports.GOOGLE_CLIENT_ID = exports.GOOGLE_CLIENT_EMAIL = exports.GOOGLE_PRIVATE_KEY = exports.GOOGLE_PRIVATE_KEY_ID = exports.GOOGLE_PROJECT_ID = exports.GOOGLE_TYPE = exports.REFRESH_TOKEN_SECRET = exports.ACCESS_TOKEN_SECRET = exports.API_KEY_LIVE = exports.ENV = exports.BASE_BO_URL = exports.BASE_FO_URL = exports.DB_USER = exports.DB_PASSWORD = exports.DB_NAME = exports.DB_PORT = exports.DB_HOST = exports.JWT_HASH_KEY = exports.BO_PATH = exports.DIST_PATH = exports.BODY_PARSER_LIMIT = exports.APP_PORT = void 0;
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(process.cwd(), ".env") });
const GET = (param) => {
    return process.env[param];
};
exports.APP_PORT = GET('APP_PORT');
exports.BODY_PARSER_LIMIT = GET('BODY_PARSER_LIMIT');
exports.DIST_PATH = GET('DIST_PATH');
exports.BO_PATH = GET('BO_PATH');
exports.JWT_HASH_KEY = GET('JWT_HASH_KEY');
exports.DB_HOST = GET('DB_HOST');
exports.DB_PORT = GET('DB_PORT');
exports.DB_NAME = GET('DB_NAME');
exports.DB_PASSWORD = GET('DB_PASSWORD');
exports.DB_USER = GET('DB_USER');
exports.BASE_FO_URL = GET('BASE_FO_URL');
exports.BASE_BO_URL = GET('BASE_BO_URL');
exports.ENV = GET('ENV');
exports.API_KEY_LIVE = GET('API_KEY_LIVE');
exports.ACCESS_TOKEN_SECRET = GET('ACCESS_TOKEN_SECRET');
exports.REFRESH_TOKEN_SECRET = GET('REFRESH_TOKEN_SECRET');
exports.GOOGLE_TYPE = GET('GOOGLE_TYPE');
exports.GOOGLE_PROJECT_ID = GET('GOOGLE_PROJECT_ID');
exports.GOOGLE_PRIVATE_KEY_ID = GET('GOOGLE_PRIVATE_KEY_ID');
exports.GOOGLE_PRIVATE_KEY = GET('GOOGLE_PRIVATE_KEY');
exports.GOOGLE_CLIENT_EMAIL = GET('GOOGLE_CLIENT_EMAIL');
exports.GOOGLE_CLIENT_ID = GET('GOOGLE_CLIENT_ID');
exports.GOOGLE_AUTH_URI = GET('GOOGLE_AUTH_URI');
exports.GOOGLE_TOKEN_URI = GET('GOOGLE_TOKEN_URI');
exports.GOOGLE_AUTH_PROVIDER_X509_CERT_URL = GET('GOOGLE_AUTH_PROVIDER_X509_CERT_URL');
exports.GOOGLE_CLIENT_X509_CERT_URL = GET('GOOGLE_CLIENT_X509_CERT_URL');
exports.GOOGLE_UNIVERSE_DOMAIN = GET('GOOGLE_UNIVERSE_DOMAIN');
let AUTH_DB = '';
if (exports.DB_USER) {
    AUTH_DB += exports.DB_USER;
}
;
if (exports.DB_PASSWORD) {
    AUTH_DB += `:${exports.DB_PASSWORD}@`;
}
;
exports.MONGOOSE_URI = `mongodb://${AUTH_DB}${exports.DB_HOST}:${exports.DB_PORT}/${exports.DB_NAME}?authMode=scram-sha1`;
exports.MONGOOSE_URI_DIRECT = `mongodb+srv://ray:RayBanMdg@cluster0.8usxh.mongodb.net/buyYourWay-db?retryWrites=true&w=majority`;
