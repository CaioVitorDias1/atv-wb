"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ClientList_1 = require("./ClientList");
var clientGet = /** @class */ (function (_super) {
    __extends(clientGet, _super);
    function clientGet(clientes) {
        var _this = _super.call(this) || this;
        _this.listaClientes = clientes;
        return _this;
    }
    clientGet.prototype.listarClientes = function () {
        console.log("Clientes disponiveis: ");
        this.listaClientes.forEach(function (cliente) {
            console.log("Nome: " + cliente.name);
            console.log("Nome Social: " + cliente.socialName);
            console.log("CPF: " + cliente.getCpf.getValue);
            console.log("Rg: " + cliente.getRgs);
            console.log("Telefones: " + cliente.getPhones);
            console.log("Data do cadastro: " + cliente.getSignUpDate);
            console.log("--------------------------------");
        });
    };
    return clientGet;
}(ClientList_1["default"]));
exports["default"] = clientGet;
