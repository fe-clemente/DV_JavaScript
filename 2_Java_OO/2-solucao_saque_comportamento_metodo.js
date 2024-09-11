class cliente{
    nome;
    cpf;  
  }


class contaCorrente{
    agenciaConta;
    saldo;

    sacar (valor){  // metodo, () é uma oper e dentro do met. {} definicao do escopo

    }
}

const cliente1 = new cliente();  // variavel mesmo nome da classe
cliente1.nome = "Fernando";
cliente1.cpf =32500579832;


if(saque <= saldoTotal) {
    contaCorrenteFernando.saldo -= saque;
console.log(" Valor sacado R$ ", saldoTotal);
}else {
    console.log(" Valor Negado para Saque ");
}

const contaCorrenteFernando = new contaCorrente();
contaCorrenteFernando.saldo = 0;
contaCorrenteFernando.agenciaConta= 1001;
contaCorrenteFernando.saldo = 100;
let saque = 150;
let saldoTotal = contaCorrenteFernando.saldo - saque;

