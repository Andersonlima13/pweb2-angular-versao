import { pergunta } from "./pergunta";

export interface alternativa {
    corridaId : number;
    perguntaId : number;
    descricao : string;
    iscorreta : boolean;
    
}