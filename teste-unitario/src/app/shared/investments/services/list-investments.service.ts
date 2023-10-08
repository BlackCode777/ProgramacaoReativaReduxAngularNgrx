import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjetoInterfaceMapdeDatas } from '../model/objetoInterfaceMapdeDatas';

@Injectable({
  providedIn: 'root',
})
export class ListInvestmentsService {
  //private url: string = 'http://localhost:3000/investments';
  private urlMapDatas: string = 'http://localhost:3000/mapDatas';

  constructor(private http: HttpClient) {}

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
