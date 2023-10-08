import { Component } from '@angular/core';
import { ObjetoInterfaceMapdeDatas } from '../investments/model/objetoInterfaceMapdeDatas';
import { ListInvestmentsService } from '../investments/services/list-investments.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  public agencia: number = 12554;
  private poupanca: number = 1000;
  private carteira: number = 3000;

  // criando uma variavel que recebe data
  public displayedColumns: string[] = [
    //'data',
    'id',
    'nome',
    'quantidade',
    'descricao',
  ];
  public dataSourceMapDatas: ObjetoInterfaceMapdeDatas[] = [];





  constructor(private investmentsService: ListInvestmentsService) {}
  ngOnInit() {
    // 2º caso de uso

    const arrayDeDentro3 = ['Joana', 'Alves', 'Miranda'];
    const arrayDeDentro2 = ['Simone', 'Ferreira', 'Andrade', arrayDeDentro3];
    const arrayDeDentro = ['Anderson', 'Santos', 'Silva', arrayDeDentro2];
    const array2 = [
      [1, 2, 3],
      ['a', 'b', 'c', arrayDeDentro],
      [true, false, true],
    ];

    // Percorrendo o array da data - array2
    for (let i = 0; i < array2[0].length; i++) {
      console.log('array2[0][i]', array2[0][i]);

      // Percorrendo array de dentro mapDatas - arrayDeDentro
      for (let j = 0; j < array2[1].length; j++) {
        console.log('array2[1][j] _ ', array2[1][j]);

        // Percorrendo array de dentro mapDatas - arrayDeDentro2
        if (Array.isArray(array2[1][3])) {
          for (let k = 0; k < array2[1][3].length; k++) {
            console.log('array2[1][3][k] _ ', array2[1][3][k]);

            // Percorrendo array de dentro mapDatas - arrayDeDentro3
            if (Array.isArray(array2[1][3][3])) {
              for (let l = 0; l < array2[1][3][3].length; l++) {
                console.log('array2[1][3][3][l] _ ', array2[1][3][3][l]);
              }
            }

          }
        }
      }
    }

    // Iterando neste array
    for (const key in array2) {
      if (array2.hasOwnProperty(key)) {
        const element = array2[key];
        console.log('element', element);
      }
    }

    // 1º caso de uso
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    // Iterando neste array
    for (const key in array) {
      if (array.hasOwnProperty(key)) {
        const element = array[key];
        console.log('element', element);
      }
    }
    // Ou pode ser desta forma tb
    for (let i = 0; i < array.length; i++) {
      console.log('array[i]', array[i]);
    }

    this.investmentsService
      .getMapDatas()
      .subscribe((mapdatas: ObjetoInterfaceMapdeDatas[]) => {
        // mapdatas agora é um array array dataSourceArrayArray[][]
        let dataSourceArrayArray: ObjetoInterfaceMapdeDatas[] = mapdatas;
        let desindexados: ObjetoInterfaceMapdeDatas[] = dataSourceArrayArray; //.flat();
        console.log('desindexados <><><> ', desindexados);

        /*
        
        
        this.dataSourceMapDatas = desindexados.map((mapdata: any) => {
          console.log('mapdata ATRIBUIDO_', mapdata);
          if (
            mapdata &&
            mapdata.data &&
            mapdata.mapDatas &&
            mapdata.mapDatas[mapdata.data]
          ) {
            console.log('mapdata ATRIBUIDO_NOIF_', mapdata);
            // Verifique se this.dataSourceMapDatas não é nulo ou indefinido antes de prosseguir
            if (this.dataSourceMapDatas) {
              // Itere pelos objetos em this.dataSourceMapDatas
              this.dataSourceMapDatas.forEach((item) => {
                console.log('item dentro do ForEach_', item);
                // Verifique se a propriedade "mapDatas" existe e é um objeto
                if (item && item.data && typeof item.data === 'object') {
                  // Itere pelas propriedades do objeto "mapDatas"
                  for (const key in item.mapDatasObj2) {
                    if (item.mapDatasObj2.hasOwnProperty(key)) {
                      // Verifique se o valor da propriedade é um array
                      if (Array.isArray(item.mapDatasObj2[key])) {
                        // Converta o array em uma string JSON e atribua à mesma propriedade
                        //item.mapDatasObj2[key] = JSON.stringify(item.mapDatas[key]);
                      }
                    }
                  }
                }
              });
            }
            // TRECHO DE CODIGO CONDENADO - Os atributos estão se peerdendo
            // let mapDataDesindexada: any = {
            //   data: mapdata.data,
            //   mapDatas: {
            //     [mapdata.data]: mapdata.mapDatas[mapdata.data].map(
            //       (mapdata_2: any) => {
            //         return {
            //           id: mapdata_2.id,
            //           nome: mapdata_2.nome,
            //           quantidade: mapdata_2.quantidade,
            //           descricao: mapdata_2.descricao,
            //         };
            //       }
            //     ),
            //   },
            // };
            //console.log('mapDataDesindexada', mapDataDesindexada);
            //return mapDataDesindexada;
          }
        });

        
        */
        return this.dataSourceMapDatas;
      });
  }

  /*  
  mapdata.mapDatas.map(
                  (mapdata2: ObjetoInterfaceMapdeDatas_2) => {
                    return {
                      id: mapdata2.id,
                      nome: mapdata2.nome,
                      quantidade: mapdata2.quantidade,
                      descricao: mapdata2.descricao,
                    };
                  }
                ),  
  */

  get getPoupanca(): number {
    return this.poupanca;
  }

  get getCarteira(): number | any {
    return this.carteira;
  }

  setSacar(valor: string): number | any {
    const sacar = Number(valor); // Aqui eu converto a string que vem do html em um number
    if (isNaN(sacar) || this.poupanca < sacar) {
      return;
    }
    this.poupanca -= sacar;
    return (this.carteira += sacar);
  }

  setDepositar(valor: string): number | undefined {
    const depositar = Number(valor); // Aqui eu converto a string que vem do html em um number
    if (isNaN(depositar) || this.poupanca < depositar) {
      return;
    }
    this.carteira -= depositar;
    return (this.poupanca += depositar);
  }
}

/*


 = { 
            data: mapdatasDesindex.data,
            mapDatas: {

               [mapdatasDesindex.data]: mapdatasDesindex.mapDatas[mapdatasDesindex.data].map( (mapdata: any) => {

                 // Aplicando a função indexOf() para retornar o index de um elemento
                 console.log('mapdata dentro do mapdatasDesindex ', mapdata);

                 return {
                   id: mapdata.id,
                   nome: mapdata.nome,
                   quantidade: mapdata.quantidade,
                   descricao: mapdata.descricao,
                 };
               })
             } 
          };
*************************

//let index = mapdatasDesindex.mapDatas[mapdatasDesindex.data].indexOf(mapdata);

          // criando um objeto vazio
          let mapKeysDatasDesindex2Vazio: ObjetoInterfaceMapdeDatas = { data: [],  mapDatas: {} };
          let mapObjectsDatasDesindex2Vazio: { [key: string]: any[] } = {};

          for (let key of mapKeysDatasDesindex2Vazio.data) {
            
            // criando um objeto e corrigindo erro de tipo, usando string[] como tipo index
            // let mapObjectsDatasDesindex2VazioCorrigido: { [key: any]: any[] } = mapObjectsDatasDesindex2Vazio[keyCorrigida];

          }
********************************

ngOnInit() {
    this.investmentsService
      .getMapDatas()
      .subscribe((mapdatas: ObjetoInterfaceMapdeDatas[]) => {
        //console.log('mapdatas _ 1', mapdatas);

        let desindexados: ObjetoInterfaceMapdeDatas[] = mapdatas;

        console.log('desindexados <><><> ', desindexados);

        this.dataSourceMapDatas = []

        // Usando o for

        for(let i = 0; i < desindexados.length; i++) {
          // Acessa o objeto desindexado e retorna o valor da propriedade data
          let mapdata: ObjetoInterfaceMapdeDatas = desindexados[i];
          for( let key = 0; key < mapdata.data.length; key++){
            // Acessa o objeto desindexado e retorna o valor da propriedade mapDatas
            let mapdataData = mapdata.mapDatas[key];
            //console.log('mapdataData', mapdataData);
            for (let key_2 = 0; key_2 < mapdataData.nome.length; key_2++) {
              // Acessa o objeto desindexado e retorna o valor da propriedade nome
              let mapdataNome = mapdataData.nome[key_2];
              for (let key_3 = 0; key_3 < mapdataNome.length; key_3++) {
                // Acessa o objeto desindexado e retorna o valor da propriedade quantidade
                let mapdataQuantidade = mapdataNome.quantidade[key_3];
                
                //console.log('mapdataQuantidade', mapdataQuantidade);
                this.dataSourceMapDatas = mapdataQuantidade;

                return this.dataSourceMapDatas.forEach({
                  mapDatas: {
                    data: mapdata.data,
                    nome: mapdataNome.nome,
                    quantidade: mapdataQuantidade.quantidade,
                  },
                });
              }
            }
          }
        }
        //console.log('this.dataSourceMapDatas INDEX ', this.dataSourceMapDatas);
      });
  }

***********************************************
deu certo

ngOnInit() {
    this.investmentsService
      .getMapDatas()
      .subscribe((mapdatas: Array<any>) => {
        //console.log('mapdatas _ 1', mapdatas);

        let desindexados: Array<any> = mapdatas;

        this.dataSourceMapDatas = desindexados;

        console.log('this.dataSourceMapDatas DESINDEX ',  this.dataSourceMapDatas);

        this.dataSourceMapDatas = desindexados.map((mapdata: any) => {
          console.log('mapdata', mapdata);
          let mapDataDesindexada: any = {
            data: mapdata.data,
            mapDatas: {
              [mapdata.data]: mapdata.mapDatas[mapdata.data].map(
                (mapdata_2: any) => {
                  return {
                    id: mapdata_2.id,
                    nome: mapdata_2.nome,
                    quantidade: mapdata_2.quantidade,
                    descricao: mapdata_2.descricao,
                  };
                }
              ),
            },
          };
          return mapDataDesindexada;
        });

        console.log('this.dataSourceMapDatas INDEX ',  this.dataSourceMapDatas);
        
        
      });
  }



**************************


.push(mapdatas.map(

          (mapdata: ObjetoInterfaceMapdeDatas) => {
            let mapDataDesindexada: ObjetoInterfaceMapdeDatas = {
              data: mapdata.data,
              mapDatas: {
                [mapdata.data]: mapdata.mapDatas[mapdata.data].map(
                  (mapdata_2: any) => {
                    return {
                      id: mapdata_2.id,
                      nome: mapdata_2.nome,
                      quantidade: mapdata_2.quantidade,
                      descricao: mapdata_2.descricao,
                    };
                  }
                ),
              },
            };
            return mapDataDesindexada;
          }

        ))

-------------------------------------

//   ObjetoInterfaceMapdeDatas[] = mapdatas.map(
        //   (mapdata: ObjetoInterfaceMapdeDatas) => {
        //     let mapDataDesindexada: ObjetoInterfaceMapdeDatas = {
        //       data: mapdata.data,
        //       mapDatas: {
        //         [mapdata.data]: mapdata.mapDatas[mapdata.data].map(
        //           (mapdata_2: any) => {
        //             return {
        //               id: mapdata_2.id,
        //               nome: mapdata_2.nome,
        //               quantidade: mapdata_2.quantidade,
        //               descricao: mapdata_2.descricao,
        //             };
        //           }
        //         ),
        //       },
        //     };
        //     return mapDataDesindexada;
        //   }
        // );
*********************
mapdatas.forEach(( mapdata: any) => {          
          let mapdataDesindexado: ObjetoInterfaceMapdeDatas = { mapDatas: {} };          
          Object.keys(mapdata.mapDatas).forEach((key: string) => {
            mapdataDesindexado.mapDatas[key] = mapdata.mapDatas[key].map(
              (mapdata_2: any) => {
                console.log('mapdata_2', mapdata_2);
                return {
                  id: mapdata_2.id,
                  nome: mapdata_2.nome,
                  quantidade: mapdata_2.quantidade,
                  descricao: mapdata_2.descricao,
                };
              }
            );
          }
          
          );
          mapdatas.push(mapdataDesindexado);
        });
*********************

*/
