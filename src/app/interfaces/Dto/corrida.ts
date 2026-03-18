import { pergunta } from "./pergunta";

export interface corrida {
    tempo : number;
    perguntas : pergunta[];
    titulo : string;
    descricao : string;
    isativa : boolean;
}