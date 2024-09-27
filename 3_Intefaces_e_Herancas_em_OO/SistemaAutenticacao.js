/* 


Ser autenticavel significa ter o metodo autenticar

*/


export class SistemaAutenticacao {
    static login(autenticavel, senha) {   // estatic, verifica o funcionario e valor da senha
        return autenticavel.autenticar(senha) ;  // metodo
    }
}