class cliente{
    nome;
    cpf;  
  }
const cliente1 = new cliente();  // variavel mesmo nome da classe
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
let saque = 150;
let saldoTotal = contaCorrenteFernando.saldo - saque;

if(saque <= saldoTotal) {
    contaCorrenteFernando.saldo -= saque;
console.log(" Valor sacado R$ ", saldoTotal);
}else {
    console.log(" Valor Negado para Saque ");
}

