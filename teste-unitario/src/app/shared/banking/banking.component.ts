import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListInvestmentsService } from '../investments/services/list-investments.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  public agencia: number = 12554;

  // criando uma variavel que recebe data
  public displayedColumns: string[] = ['servico','01/08','02/08','03/08','04/08','05/08','06/08','07/08'];
  public dataSourceMapDatas: any = new MatTableDataSource();
  
  public displayedColumnsModificado: string[] = ['servico','01/08','02/08','03/08','04/08','05/08','06/08','07/08'];
  public dataSourceMapDatasModificado: any = new MatTableDataSource();
  dataSource: any;

  constructor(private investmentsService: ListInvestmentsService) {}
  ngOnInit() {
    
    this.investmentsService.getMapDatasModificado().subscribe((mapdatas: any) => {
      let dataSourceArray: any[] = mapdatas;
      console.log('this.dataSourceMapDatasModificado', dataSourceArray);
      this.dataSourceMapDatas = new MatTableDataSource<any>(dataSourceArray);

      console.log('this.dataSourceMapDatasModificado', this.dataSourceMapDatas);
    }
    );

    //Testando com a nova tipagem
    this.investmentsService
      .getMapDatasModificado()
      .subscribe((mapdatas: any) => {
        let dataSourceArray: any[] = mapdatas;
        console.log('this.dataSourceMapDatasModificado', dataSourceArray);
        this.dataSourceMapDatasModificado = new MatTableDataSource<any>(dataSourceArray);

        console.log('this.dataSourceMapDatasModificado', this.dataSourceMapDatasModificado);

    });

    // Assim funciona
    this.dataSource = [
      {
        servico: 'detran_cnh_renovação',
        '01/08': 0,
        '02/08': 0,
        '03/08': 0,
        '04/08': 12,
        '05/08': 32,
        '06/08': 45,
        '07/08': 56,
      },
      {
        servico: 'detran_acompanhamento_cnh',
        '01/08': 0,
        '02/08': 0,
        '03/08': 0,
        '04/08': 25,
        '05/08': 45,
        '06/08': 56,
        '07/08': 67,
      },
      {
        servico: 'cdhu_acompanhamento_imovel',
        '01/08': 0,
        '02/08': 0,
        '03/08': 0,
        '04/08': 36,
        '05/08': 67,
        '06/08': 78,
        '07/08': 89,
      },
      {
        servico: 'aducacao_carteirinha_escolar',
        '01/08': 0,
        '02/08': 0,
        '03/08': 0,
        '04/08': 45,
        '05/08': 78,
        '06/08': 89,
        '07/08': 90,
      },
      {
        servico: 'iirgd_primeira_via',
        '01/08': 0,
        '02/08': 0,
        '03/08': 0,
        '04/08': 78,
        '05/08': 89,
        '06/08': 90,
        '07/08': 90,
      },
    ];
  }
}




    /*
    //console.log('this.dataSourceMapDatasPUSH()_', this.dataSourceMapDatas.push())
     this.investmentsService
       .getMapDatasModificado()
       .subscribe((mapdatas: any) => {
         let dataSourceArray: any[] = mapdatas;
         console.log('this.dataSourceMapDatasModificado', dataSourceArray);
         this.dataSourceMapDatasModificado = new MatTableDataSource<any>(dataSourceArray);
     });
    */


  /*
  public getdados() {
    this.investmentsService
      .getMapDatas()
      .subscribe((mapdatas: ObjetoInterfaceMapdeDatas[]) => {
        let dataSourceArray: ObjetoInterfaceMapdeDatas[] = mapdatas;
        for (let key in dataSourceArray) {
          let dataSourceArrayKey = dataSourceArray[key];
          for (let key2 in dataSourceArrayKey) {
            this.dataSourceMapDatas = [dataSourceArrayKey[key2]];
            this.dataSourceMapDatas.push([[dataSourceArrayKey[key2]]]);            
          }
        }
      });
  }
  */

/*
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
*/



/*

let primeiroMap: ObjetoInterfaceMapdeDatas[] = this.dataSourceMapDatas[data1][0];

          //console.log('primeiroMap', primeiroMap);
          // Aqui estou com objeto undefined
          // if(primeiroMap && primeiroMap.length > 0 && primeiroMap[0] != null && primeiroMap[0] != undefined) {

          for (let data2 = 0; data2 < primeiroMap.length; data2++) { // Aqui

            console.log('primeiroMap[data2]', primeiroMap[data2]);
            
            let segundoMap: ObjetoInterfaceMapdeDatas = primeiroMap[data2];

          }

*/


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
              
              this.dataSourceMapDatas.forEach((item) => {
                console.log('item dentro do ForEach_', item);
                
                if (item && item.data && typeof item.data === 'object') {
                  
                  for (const key in item.mapDatasObj2) {
                    if (item.mapDatasObj2.hasOwnProperty(key)) {

                      if (Array.isArray(item.mapDatasObj2[key])) {
                        
                        item.mapDatasObj2[key] = JSON.stringify(item.mapDatas[key]);
                      }
                    }
                  }
                }
              });
            }
          }
        });
        */
    //return this.dataSourceMapDatas;
    //});









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
