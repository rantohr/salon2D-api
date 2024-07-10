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
const auth_service_1 = require("./auth.service");
const async_handler_1 = require("../../middlewares/async-handler");
const error_response_1 = require("../../utils/error-response");
class AuthController {
    constructor() {
        this.signin = (0, async_handler_1.asyncHandler)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.authService.signin(req.body);
                const error = { message: "Email ou mot de passe invalide" };
                if (user._id)
                    this.sendTokenResponse(user, res);
                else
                    throw error;
            }
            catch (error) {
                throw error;
            }
        }));
        this.signup = (0, async_handler_1.asyncHandler)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            // get user
            let userInfo = yield this.authService.getUserByEmail(req.body.email);
            if (userInfo) {
                // let user = await this.authService.signin(req.body);
                //this.sendTokenResponse(user, res);
                return next(new error_response_1.ErrorResponse('Utilisateur déjà inscrit', 409));
            }
            else {
                const user = yield this.authService.signup(req.body);
                res.status(200).json(user);
            }
        }));
        this.signout = (0, async_handler_1.asyncHandler)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.authService.signout(req.body.id);
            res.status(200).json(response);
        }));
        this.forgotPassword = (0, async_handler_1.asyncHandler)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.authService.forgotPassword(req.body.email, req.body.app);
            res.status(200).json(result);
        }));
        this.resetpassword = (0, async_handler_1.asyncHandler)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let result = yield this.authService.resetPassword(req.params.token, req.body.password);
            res.status(200).json(result);
        }));
        this.sendTokenResponse = (user, res) => {
            // generate token
            try {
                const accessToken = user.generateAccessToken();
                const refreshToken = user.generateRefreshToken();
                res.status(200).json({
                    success: true,
                    body: user,
                    accessToken,
                    refreshToken
                });
            }
            catch (error) {
                throw error;
            }
        };
        this.authService = new auth_service_1.default();
    }
}
exports.default = new AuthController();
