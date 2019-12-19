type prioridade = 'BAIXA | MEDIA | ALTA';

export interface Lembrete {
    codigo: number;
    conteudo: string;
    prioridade: prioridade;
    arquivado: boolean;
}
