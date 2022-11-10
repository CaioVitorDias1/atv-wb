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
var client_1 = require("../entities/client");
var cpf_1 = require("../models/cpf");
var phone_1 = require("../models/phone");
var rg_1 = require("../models/rg");
var clientCreation_1 = require("./clientCreation");
var optionInputs_1 = require("./optionInputs");
var ClientSignUp = /** @class */ (function (_super) {
    __extends(ClientSignUp, _super);
    function ClientSignUp(newClient) {
        var _this = _super.call(this) || this;
        _this.client = newClient;
        _this.input = new optionInputs_1["default"]();
        return _this;
    }
    ClientSignUp.prototype.signUp = function () {
        console.log("Cadastrando um cliente: ");
        var name = this.input.getString("Insira o nome do cliente: ");
        var socialName = this.input.getString("Insira o nome social do cliente: ");
        var cpfNumber = this.input.getString("Insira o CPF do cliente: ");
        var cpfEmission = this.input.getString("Insira a data de emissao do cpf do cliente, no formato dd/mm/yyyy: ");
        var brokenDateCpf = cpfEmission.split('/');
        var day = new Number(brokenDateCpf[0].valueOf()).valueOf();
        var month = new Number(brokenDateCpf[1].valueOf()).valueOf();
        var year = new Number(brokenDateCpf[2].valueOf()).valueOf();
        var dddPhone = this.input.getString("Insira o ddd do cliente: ");
        var phoneNumber = this.input.getString("Insira o telefone do cliente: ");
        var rgNumber = this.input.getString("Insira o rg do cliente: ");
        var rgEmission = this.input.getString("Insira a data de emissao do rg do cliente, no formato dd/mm/yyyy: ");
        var brokenDateRg = rgEmission.split('/');
        var dayRg = new Number(brokenDateRg[0].valueOf()).valueOf();
        var monthRg = new Number(brokenDateRg[1].valueOf()).valueOf();
        var yearRg = new Number(brokenDateRg[2].valueOf()).valueOf();
        var signUpDate = this.input.getString("Insira a data de cadastro do cliente, no formato dd/mm/yyyy: ");
        var brokenDateSign = signUpDate.split('/');
        var daySign = new Number(brokenDateSign[0].valueOf()).valueOf();
        var monthSign = new Number(brokenDateSign[1].valueOf()).valueOf();
        var yearSign = new Number(brokenDateSign[2].valueOf()).valueOf();
        var emissionDateRg = new Date(yearRg, monthRg, dayRg);
        var rg = new rg_1["default"](rgNumber, emissionDateRg);
        var phone = new phone_1["default"](dddPhone, phoneNumber);
        var emissionDateCpf = new Date(year, month, day);
        var CPF = new cpf_1["default"](cpfNumber, emissionDateCpf);
        var dateSignUp = new Date(yearSign, monthSign, daySign);
        var client = new client_1["default"](name, socialName, CPF, phone, rg, dateSignUp);
        this.client.push(client);
        console.log("Fim do cadastro!");
    };
    return ClientSignUp;
}(clientCreation_1["default"]));
exports["default"] = ClientSignUp;
