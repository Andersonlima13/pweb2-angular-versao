import { Alternativa } from "./Alternativa"

export interface Pergunta {
    id: number,
    corridaId : number,
    enunciado : String,
    respostaCorreta : number
    alternativas : Alternativa[]
}