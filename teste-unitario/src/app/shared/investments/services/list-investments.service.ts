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

  constructor(private http: HttpClient) {}

  public getMapDatasModificado(): Observable<
    InterfaceObjetoModificadoComDatas[]
  > {
    return this.http.get<InterfaceObjetoModificadoComDatas[]>(
      this.urlModificado
    );
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
