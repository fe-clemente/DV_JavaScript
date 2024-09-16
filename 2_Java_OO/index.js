import { Cliente } from "./ProjetoClasses/Class/Cliente.js";
import { ContaCorrente } from "./ProjetoClasses/Class/ContaCorrente.js";


const cliente1 = new Cliente( "Ricardo", 11122233309 ); // Devido ao construtor na classe Cliente, excluido as clinhas CLiente1.nome e cpdf =..
const contaCorrenteRicardo = new ContaCorrente(cliente1, 15056); // exluido as linhas contaRicardo.agencia e cliente = ...; construtor aba cliente

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(20);
console.log(cliente1, contaCorrenteRicardo);

let valor =200;

const cliente2 = new Cliente( "Alice", 856958855 ); // Devido ao construtor na classe Cliente, excluido as clinhas CLiente1.nome e cpdf =..
const contaCorrentAlice = new ContaCorrente(cliente1, 15056); // exluido as linhas contaRicardo.agencia e cliente = ...; construtor aba cliente

contaCorrentAlice.depositar(150);
contaCorrentAlice.sacar(30);
console.log(cliente2, contaCorrentAlice);