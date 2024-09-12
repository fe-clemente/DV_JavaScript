class cliente{
    nome;
    cpf;  
  }



class contaCorrente{
    agenciaConta;
    saldo;

    sacar (valor){  // metodo, () é uma oper e dentro do met. {} definicao do escopo
       if( this.saldo >=valor){
        this.saldo -= valor;
        return valor;
       }
    }

    depositar (valor){
        if(this.saldo >0){ // Se o valor for maior que 0
            this.saldo += valor; //adiona no saldo
            console.log( " valor foi depositado ", valor, " e o total é: ");
        }
    }
}

const cliente2 = new cliente();
const cliente1= new cliente();

cliente1Nome ="Fernando"
cliente1Cpf= 32500579832

cliente1Nome ="Renata"
cliente1Cpf= 32500579832

const contaCorrenteFernando = new contaCorrente();
contaCorrenteFernando.saldo= 5;
contaCorrenteFernando.genciaConta= 585;

const contaCorrenteRenata = new contaCorrente();
contaCorrenteRenata.saldo= 555;
contaCorrenteRenata.genciaConta = 55585;


//console.log(contaCorrenteFernando.saldo);
contaCorrenteFernando.saldo=100;
//console.log(contaCorrenteFernando.saldo);
contaCorrenteFernando.sacar(99)           // valor atribuido em sacar 
//console.log(contaCorrenteFernando.saldo);
contaCorrenteFernando.depositar(500);
//console.log(contaCorrenteFernando.saldo);

const valorsacado = contaCorrenteFernando.sacar(50);
console.log(valorsacado);


