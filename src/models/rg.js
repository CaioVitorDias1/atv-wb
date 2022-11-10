"use strict";
exports.__esModule = true;
var Rg = /** @class */ (function () {
    function Rg(value, dateCreation) {
        this.value = value;
        this.dateCreation = dateCreation;
    }
    Object.defineProperty(Rg.prototype, "getValue", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rg.prototype, "getDateCreation", {
        get: function () {
            return this.dateCreation;
        },
        enumerable: false,
        configurable: true
    });
    return Rg;
}());
exports["default"] = Rg;
