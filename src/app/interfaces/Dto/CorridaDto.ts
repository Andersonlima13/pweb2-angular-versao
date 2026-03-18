import { PerguntaDto } from "./PerguntaDto";

export interface CorridaDto {
    tempo : number;
    perguntas : PerguntaDto[];
    titulo : string;
    descricao : string;
    isativa : boolean;
}