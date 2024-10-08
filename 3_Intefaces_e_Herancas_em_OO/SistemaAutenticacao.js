/* 


Ser autenticavel significa ter o metodo autenticar

*/
export class SistemaAutenticacao {
    static login(autenticavel, senha) {   // estatic, verifica o funcionario e valor da senha
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return"autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}