import { alternativa } from "./alternativa";

export interface pergunta {
    corridaId : number;
    enunciado : string;
    respostaCorreta : number;
    alternativas : alternativa[];
}