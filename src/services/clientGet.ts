import Client from "../entities/client";
import clientList from "./ClientList";


export default class clientGet extends clientList{
    private listaClientes: Array<Client>

    constructor(clientes: Array<Client>){
        super()
        this.listaClientes = clientes
    }

    listarClientes(): void{
        console.log("Clientes disponiveis: ")
        this.listaClientes.forEach(cliente => {
            console.log(`Nome: `+ cliente.name)
            console.log(`Nome Social: ` + cliente.socialName)
            console.log(`CPF: ` + cliente.getCpf.getValue)
            console.log(`Rg: ` + cliente.getRgs)
            console.log(`Telefones: ` + cliente.getPhones)
            console.log(`Data do cadastro: ` + cliente.getSignUpDate)
            console.log(`--------------------------------`)
        })
    }
}