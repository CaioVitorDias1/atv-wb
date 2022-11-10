"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.prototype.getNumber = function (message) {
        var prompt = promptSync();
        var value = prompt(message);
        var number = new Number(value);
        return number.valueOf();
    };
    Input.prototype.getString = function (message) {
        var prompt = promptSync();
        var string = prompt(message);
        return string;
    };
    return Input;
}());
exports["default"] = Input;
