"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModel = void 0;
const constants_1 = require("./constants");
class ResponseModel {
    constructor(sucess, message, status, data) {
        this.sucess = sucess;
        this.message = message;
        this.status = status;
        this.data = data;
    }
    static success(data, message = 'ok') {
        return new ResponseModel(true, message, constants_1.STATUS_OK, data);
    }
    static error(message, status = constants_1.STATUS_INTERNAL_SERVER_ERROR) {
        return new ResponseModel(false, message, status, null);
    }
}
exports.ResponseModel = ResponseModel;
// ESTO ES ESTANDARIZACIÓN (BUENAS PRÁCTICAS)
