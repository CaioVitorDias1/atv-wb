"use strict";
exports.__esModule = true;
var Company = /** @class */ (function () {
    function Company() {
        this.clients = [];
        this.products = [];
        this.services = [];
    }
    Company.prototype.getClients = function () {
        return this.clients;
    };
    Company.prototype.getProducts = function () {
        return this.products;
    };
    Company.prototype.getServices = function () {
        return this.services;
    };
    return Company;
}());
exports["default"] = Company;
