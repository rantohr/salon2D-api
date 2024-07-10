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
const crypto = require("crypto");
const app_constant_1 = require("../../app.constant");
const error_response_1 = require("../../utils/error-response");
const user_repository_1 = require("../users/user.repository");
const user_model_1 = require("../users/user.model");
const sendEmail_1 = require("../../utils/sendEmail");
const salon_repository_1 = require("../salon/salon.repository");
const salon_model_1 = require("../salon/salon.model");
class AuthService {
    constructor() {
        this.signin = (credentials) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const user = await this.verifyUserCredentials(credentials);
                const { email, password } = credentials;
                // check for user
                const user = yield user_model_1.default.findOne({ email }).select("+password");
                if (!user) {
                    return new error_response_1.ErrorResponse("Adresse email ou mot de passe invalide", 401);
                }
                // match password
                const isMatch = yield user.matchPassword(password);
                if (!isMatch) {
                    return new error_response_1.ErrorResponse("Adresse email ou mot de passe invalide", 401);
                }
                yield user.save({ validateBeforeSave: false });
                return user;
            }
            catch (error) {
                throw error;
            }
        });
        this.signup = (userPayload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.addUser(Object.assign(Object.assign({}, userPayload), { newUser: true }));
                const salon = yield this.salonRepository.findById("66583e9ef50c9ed4cb4eea52");
                console.log("=======================", salon);
                if (!salon) {
                    throw new Error('Salon not found');
                }
                const options = {
                    receiver: user.email,
                    context: 'register-done',
                    data: {
                        name: user.name ? user.name : user.email,
                        email: userPayload.email,
                        password: userPayload.password,
                        resetUrl: "",
                        nom_salon: salon.nom || 'Nom du salon non disponible',
                        dd_salon: salon.date_debut || '',
                        df_salon: salon.date_fin || '',
                    }
                };
                //  await sendEmail(options);
                //  console.log('Email sent.')
                return {
                    success: true,
                    data: user,
                };
            }
            catch (error) {
                console.log('ERROR CATCHED ON SIGNUP:::::', error);
                throw error;
            }
        });
        this.signout = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(id);
            user.save({ validateBeforeSave: false });
            return {
                success: true,
                data: `User signed out successfully`,
            };
        });
        this.forgotPassword = (userEmail, app) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.verifyUserByEmail(userEmail);
                const resetUrl = yield this.generateResetUrl(user, app);
                const result = yield this.sendResetTokenEmail(user, resetUrl);
                return {
                    success: true,
                    data: result
                };
            }
            catch (error) {
                throw error;
            }
        });
        this.resetPassword = (resetToken, newPassword) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resetPasswordToken = crypto
                    .createHash('sha256')
                    .update(resetToken)
                    .digest('hex');
                const user = yield this.userRepository.getOneUser({
                    resetPasswordToken,
                    resetPasswordExpire: { $gt: Date.now() } // check if token did not expire
                });
                if (!user) {
                    throw new error_response_1.ErrorResponse("Invalid token", 400);
                }
                user.password = newPassword;
                user.resetPasswordToken = undefined;
                user.resetPasswordExpire = undefined;
                yield user.save();
                return {
                    success: true,
                    data: `Password updated successfully`,
                };
            }
            catch (error) {
                throw error;
            }
        });
        this.verifyUserCredentials = ({ email, password, fromBo }) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!email || !password) {
                    throw new error_response_1.ErrorResponse("Invalid email or password", 400);
                }
                const user = yield this.userRepository.getOneUserAndSelect({ email }, "password");
                console.log("user signin value", user);
                if (!user) {
                    throw new error_response_1.ErrorResponse(`User with email: ${email} not found`, 401);
                }
                console.log("signin atempt, is from dashboard =>", fromBo);
                if (fromBo) {
                    console.log("trying to access dashboard =>", user.email, user.role);
                    if (user.role === "Admin" || user.role === "SuperAdmin" || user.role === "Exposant") {
                    }
                    else {
                        throw new error_response_1.ErrorResponse("Account not allowed to access dashboard", 401);
                    }
                }
                return user;
            }
            catch (error) {
                throw error;
            }
        });
        this.generateResetUrl = (user, app) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resetToken = user.getResetPasswordToken();
                yield user.save({ validateBeforeSave: false });
                let baseUrl;
                switch (app) {
                    case "bo":
                        baseUrl = app_constant_1.BASE_BO_URL;
                        break;
                    case "fo":
                        baseUrl = app_constant_1.BASE_FO_URL;
                        break;
                    default:
                        throw new error_response_1.ErrorResponse("Unkown app", 400);
                }
                const resetUrl = `${baseUrl}/auth/resetpassword/${resetToken}`;
                return resetUrl;
            }
            catch (error) {
                throw error;
            }
        });
        this.verifyUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.getOneUser({ email });
                if (!user) {
                    throw new error_response_1.ErrorResponse(`User with email : ${email} not found`, 404);
                }
                return user;
            }
            catch (error) {
                throw error;
            }
        });
        this.sendResetTokenEmail = (user, resetUrl) => __awaiter(this, void 0, void 0, function* () {
            try {
                const options = {
                    receiver: user.email,
                    context: 'reset-token',
                    data: {
                        name: user.name ? user.name : user.email,
                        resetUrl
                    }
                };
                yield (0, sendEmail_1.sendEmail)(options);
                return "Email sent";
            }
            catch (error) {
                user.resetPasswordToken = undefined;
                user.resetPasswordExpire = undefined;
                yield user.save({ validateBeforeSave: false });
                throw new error_response_1.ErrorResponse("Error occured on server: email could not be sent", 500);
            }
        });
        this.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("geting user by", email);
                let user = yield this.userRepository.getOneUser({ email });
                return user;
            }
            catch (error) {
                throw error;
            }
        });
        this.userRepository = new user_repository_1.UserRepository(user_model_1.default);
        this.salonRepository = new salon_repository_1.SalonRepository(salon_model_1.default);
    }
}
exports.default = AuthService;
