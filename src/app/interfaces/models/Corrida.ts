import { Pergunta } from "./Pergunta";

export interface Corrida {
     id: number,
     tempo : number,
     perguntas : Pergunta[],
     titulo : String,
        descricao : String,
        isativa : boolean
}
    
  
