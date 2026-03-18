import { AlternativaDto } from "./AlternativaDto";

export interface PerguntaDto {
    corridaId : number;
    enunciado : string;
    respostaCorreta : number;
    alternativas : AlternativaDto[];
}