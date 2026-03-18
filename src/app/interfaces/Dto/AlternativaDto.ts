import { PerguntaDto } from "./PerguntaDto";

export interface AlternativaDto {
    corridaId : number;
    perguntaId : number;
    descricao : string;
    iscorreta : boolean;
    
}