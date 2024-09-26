import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);//parametros do construtos
    }


    sacar(valor){
        const taxa = 1.02;   // valor da taxa //  1 é o multipicador ou seja valor sacador x 02
        this._sacar(valor,taxa); // passando valor e a taxa da operacao
        return this.sacar(valor, taxa); // retonando para quem chamar a operacao sacar valor e taxa
    }
}