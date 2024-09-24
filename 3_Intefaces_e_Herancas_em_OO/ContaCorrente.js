import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ // extends herança 
    static numeroDeContas = 0;  
    constructor(cliente, agencia) {
        super(0,cliente, agencia); // super tras os atributos do construtos da classe mae
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}