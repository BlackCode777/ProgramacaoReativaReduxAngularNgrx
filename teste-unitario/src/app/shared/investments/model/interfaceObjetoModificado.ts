export interface InterfaceObjetoModificadoComDatas {
  servico: string;
  dadosPorDia: DataPorDia[];
}

export interface DataPorDia {
  data: string;
  valor: number;
}

/*
export interface InterfaceObjetoModificadoComDatas {
  servico: string;
  '01/08': number;
  '02/08': number;
  '03/08': number;
  '04/08': number;
  '05/08': number;
  '06/08': number;
  '07/08': number;
}

*/