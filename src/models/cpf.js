"use strict";
exports.__esModule = true;
var Cpf = /** @class */ (function () {
    function Cpf(value, dateCreation) {
        this.value = value;
        this.dateCreation = dateCreation;
    }
    Object.defineProperty(Cpf.prototype, "getValue", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cpf.prototype, "getDateCreation", {
        get: function () {
            return this.dateCreation;
        },
        enumerable: false,
        configurable: true
    });
    return Cpf;
}());
exports["default"] = Cpf;
