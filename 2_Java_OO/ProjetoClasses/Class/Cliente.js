export class Cliente {
    nome;
    _cpf;

    get _cpf() {
        return this._cpf;

    }
    constructor(nome, cpf) {   // construtor, atribuindo 1 cpf por nome
        this._cpf = cpf;
        this.nome = nome;


    }



}