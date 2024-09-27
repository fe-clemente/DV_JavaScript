import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";



const diretor = new Diretor("Rodrigo", 1000000, 123456789);
diretor.cadastrarSenha("926695");



const gerente = new Gerente("Ricardo", 50000, 889486415);
gerente.cadastrarSenha("444747");


const cliente = new Cliente ("Selma", 5666, 88858410)
cliente.cadastrarSenha("465")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "926695");  // const esta logado é retorno do  que a funcao SistemaAuten.. der.
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "444747");

const clienteEstalogado = SistemaAutenticacao.loging(cliente, "456");


console.log(gerenteEstaLogo, gerenteEstaLoga);



