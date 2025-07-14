"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const responseModel_1 = require("../shared/responseModel");
const jwt_1 = require("./jwt");
const constants_1 = require("../shared/constants");
const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(constants_1.STATUS_UNAUTHORIZED).json(responseModel_1.ResponseModel.error('Token no proporcionado'));
    }
    const token = header.split(' ')[1];
    try {
        const decoded = (0, jwt_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json(responseModel_1.ResponseModel.error('Token inválido'));
    }
};
exports.authMiddleware = authMiddleware;
