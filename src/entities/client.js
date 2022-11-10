"use strict";
exports.__esModule = true;
var Client = /** @class */ (function () {
    function Client(name, socialName, cpf, phone, rg, signUpDate) {
        this.name = name;
        this.socialName = socialName;
        this.cpf = cpf;
        this.rgs = [];
        this.rgs.push(rg);
        this.signUpDate = signUpDate;
        this.phones = [];
        this.phones.push(phone);
        this.consumedProducts = [];
    }
    Object.defineProperty(Client.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "getSignUpDate", {
        get: function () {
            return this.signUpDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "getPhones", {
        get: function () {
            return this.phones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "getConsumedProducts", {
        get: function () {
            return this.consumedProducts;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
exports["default"] = Client;
