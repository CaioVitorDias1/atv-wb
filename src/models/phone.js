"use strict";
exports.__esModule = true;
var Phone = /** @class */ (function () {
    function Phone(ddd, number) {
        this.ddd = ddd;
        this.number = number;
    }
    Object.defineProperty(Phone.prototype, "getDdd", {
        get: function () {
            return this.ddd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "getNumber", {
        get: function () {
            return this.number;
        },
        enumerable: false,
        configurable: true
    });
    return Phone;
}());
exports["default"] = Phone;
