export class Cliente{
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){ // senha esta passando no construtor esta diferente
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha
    }

    autenticar(){
        return  false;
    }
}