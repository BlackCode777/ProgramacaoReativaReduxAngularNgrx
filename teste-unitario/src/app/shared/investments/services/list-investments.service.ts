import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceObjetoModificadoComDatas } from '../model/interfaceObjetoModificado';
import { ObjetoInterfaceMapdeDatas } from '../model/objetoInterfaceMapdeDatas';

@Injectable({
  providedIn: 'root',
})
export class ListInvestmentsService {
  //private url: string = 'http://localhost:3000/investments';
  private urlMapDatas: string = 'http://localhost:3000/mapDatas';

  private urlModificado: string = 'http://localhost:3000/dados';

  private apiAveriguacaoFiltradosDia = 'http://localhost:8080/motor-web/sr.estatisticas.api/averiguacaoEventoFiltradoPorDia';

  constructor(private http: HttpClient) {}

  // Criar um metodo post para enviar os dados para o backend
  // public postMapDatas(): any{
  //   return this.http.post(this.apiAveriguacaoFiltradosDia, {
  //     "dataInicial": "2021-08-01",
  //     "dataFinal": "2021-08-07",
  //     "idServico": 1
  //   }, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjbyIsImV4cCI6MTYyODMwMjYxMiwiaWF0IjoxNjI4MjE3ODEyfQ.4l7c0Z6b0hZ6X2lq1Z2ZJnq5FZ0I2Y8RyM7nX7K2hX5X5yO6Q1Kl5XmJZ1S5Lq2y3v0B0vR1Kz6Q1fX4XkDp3Q"
  //     }
  //   })
  // }

  public getMapDatasModificado(): Observable<InterfaceObjetoModificadoComDatas[]> {
    return this.http.get<InterfaceObjetoModificadoComDatas[]>(this.urlModificado);
  }

  public getMapDatas(): Observable<ObjetoInterfaceMapdeDatas[]> {
    return this.http.get<ObjetoInterfaceMapdeDatas[]>(this.urlMapDatas);
  }

  // public getMapDatas(): Observable<ObjetoInterfaceMapdeDatas[]> {
  //   return this.http.get<ObjetoInterfaceMapdeDatas[]>(this.urlMapDatas).pipe(
  //     map((mapdatas) => {
  //       return mapdatas;
  //     })
  //   );
  // }

  // public list(): Observable<Array<Investments>> {
  //   return this.http.get<Array<Investments>>(this.url).pipe(
  //     map((investments) => {
  //       return investments;
  //     })
  //   );
  // }
}
