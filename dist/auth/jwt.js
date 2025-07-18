"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'MICLAVESECRETA7373773737337YHHBJBJB9NNDKNKDNKNDJBDJFD$%&&$9299282892';
const signToken = (payload, expiresIn = '2h') => {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn });
};
exports.signToken = signToken;
const verifyToken = (token) => jsonwebtoken_1.default.verify(token, JWT_SECRET);
exports.verifyToken = verifyToken;
