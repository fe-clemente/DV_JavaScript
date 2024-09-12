class cliente{
    nome;
    cpf;  
  }
const cliente1 = new cliente();
cliente1.nome = "Fernando";
cliente1.cpf =32500579832;


class contaCorrente{
    agenciaConta;
    saldo;
}

const contaCorrenteFernando = new contaCorrente();
contaCorrenteFernando.saldo = 0;
contaCorrenteFernando.agenciaConta= 1001;
contaCorrenteFernando.saldo = 100;
let saque = 0;
let saldoTotal = contaCorrenteFernando.saldo - saque;

if(saldoTotal >= 1) {
    console.log(" Pode efetuar o saque; ");
}else {
    console.log(" negado ");
}



