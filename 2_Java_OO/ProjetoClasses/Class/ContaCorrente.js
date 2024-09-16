import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {  // se o novo valor for uma instacia de cliente, atribui valor, se nao 
            this._cliente = novoValor;
        }
    }

    get cliente() { // get vai apenas mostrar o saldo,só tem acesso de leitura nao tem acesso de acesso,
        return this._cliente; // tem acesso de 
    }


    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
    }


    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        conta.cidade = "São Paulo" // add atributo em objetos dinamincamento no objeto CONTA que esta no Index 
        const valorSacado = this.sacar(valor); // recebendo objeto conta
        conta.depositar(valorSacado);

    }
}