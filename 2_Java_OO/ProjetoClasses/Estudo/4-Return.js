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
        if(this.saldo >0)return;// Se o valor for maior que 0            
            //adiona no saldo
           // console.log( " valor foi depositado ", valor, " e o total é: ");
        
        
        this.saldo += valor;       
    
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





contaCorrenteFernando.saldo=100;
contaCorrenteFernando.sacar(100)           // valor atribuido em sacar 
contaCorrenteFernando.depositar(99);
contaCorrenteFernando.sacar(100)   


const valorsacado = contaCorrenteFernando.sacar(99);  // devolve o valor informado add
console.log("return", valorsacado);                              // return 

console.log(contaCorrenteFernando.saldo);

