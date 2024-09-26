import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";



const diretor = new Diretor("Rodrigo", 1000000, 123456789);
diretor.cadastrarSenha("926695");
const gerente = new Gerente("Ricardo", 50000, 889486415);


const estaLogado = SistemaAutenticacao.login(diretor, "9266");// const esta logado é retorno do  que a funcao SistemaAuten.. der.

console.log(estaLogado);