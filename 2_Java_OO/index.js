import { cliente }  from "./ProjetoClasses/Class/Cliente.js";
import { ContaCorrente } from "./ProjetoClasses/Class/ContaCorrente.js";

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf= 32500579832;


const cliente2 = new cliente();
cliente2.nome= "Alice";
cliente2.cpf= 766725812;

const contaCorrenteRicado = new ContaCorrente();
const contaCorrenteAlice = new ContaCorrente();



contaCorrenteRicado._saldo=100;
contaCorrenteRicado.agencia= 555;
//console.log("Saldo", contaCorrenteRicado._saldo,   "Agencia", contaCorrenteRicado.agencia);
const valorSacado =  contaCorrenteRicado.sacar(1);
console.log(valorSacado);




//console.log("Saldo", contaCorrenteRicado._saldo,   "Agencia", contaCorrenteRicado.agencia);
//contaCorrenteRicado.depositar(1);
//console.log("Saldo", contaCorrenteRicado._saldo,   "Agencia", contaCorrenteRicado.agencia);

