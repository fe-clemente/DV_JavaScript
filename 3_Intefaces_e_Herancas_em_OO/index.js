import {Cliente} from "./Cliente.js"
import { Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);



const contaCorrenteRicardo = new Conta(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPopupancaRicardo= new Conta(50, cliente1,);
contaCorrenteRicardo.depositar(2500);

console.log(contaCorrenteRicardo);

console.log(contaPopupancaRicardo);