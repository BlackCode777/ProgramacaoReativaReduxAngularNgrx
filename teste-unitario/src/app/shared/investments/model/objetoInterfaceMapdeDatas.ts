import { ObjetoInterfaceMapdeDatas_2 } from "./ObjetoInterfaceMapdeDatas_2";

// criar uma interface de acordo com a estrutura do pbjeto acima
export interface ObjetoInterfaceMapdeDatas {

  [x: string]: any;

  data: string[];

   mapDatasObj2: {
     [key: string]: Array<ObjetoInterfaceMapdeDatas_2[]>; // add the index signature ;
  };

}


