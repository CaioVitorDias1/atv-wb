"use strict";
exports.__esModule = true;
var optionInputs_1 = require("./src/services/optionInputs");
var clientGet_1 = require("./src/services/clientGet");
var company_1 = require("./src/entities/company");
var clientSignUp_1 = require("./src/services/clientSignUp");
console.log("Bem vindo a agencia!");
var serviceOn = true;
var input = new optionInputs_1["default"]();
var company = new company_1["default"]();
while (serviceOn) {
    console.log("escolha um servico:");
    console.log("1 = cadastrar clientes");
    console.log("2 = listar todos os clientes");
    console.log("0 = sair");
    var option = input.getNumber("escolha o servico desejado: ");
    switch (option) {
        case 1:
            var signingUp = new clientSignUp_1["default"](company.getClients());
            signingUp.signUp();
            break;
        case 2:
            var clientes = new clientGet_1["default"](company.getClients());
            clientes.listarClientes();
            break;
        case 0:
            serviceOn = false;
    }
}
