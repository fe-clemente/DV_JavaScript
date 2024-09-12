export class ContaCorrente {
    _saldo = 0;
    agencia;


sacar(valor){
    if (this._valor >= valor) {
        this._saldo -= valor;
    }
}

depositar(valor){
    if (valor <= 0) {
        return;
    }
    this._saldo += valor;
}

}

