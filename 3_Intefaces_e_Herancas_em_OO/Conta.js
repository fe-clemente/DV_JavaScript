// AGORA É UMA CLASSE ABSTRATRA POIS ELA DEVE SEMPRE SER HERDADA E NUNCA INSTACIADA

export class Conta {
    constructor(saldoInicial, cliente, agencia) {

        if(this.constructor == Conta){         // funcao impedindo o ususario de instanciar a conta
            throw new Error("Voce nao deve instanciar um objeto conta diretamente pois é uma classe abstrata"); // mensagem de erro para usuario
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;            
   
       
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }


   
    get saldo() {
        return this._saldo;
    }
 // metedo abstrado, todos as contas vao ser sobrescritas
    sacar(valor) {
      throw new Error (" o método sacar da conta é abstrato, precisa ser chamado")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}