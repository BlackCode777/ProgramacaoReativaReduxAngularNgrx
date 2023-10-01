import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Investments } from '../model/investments';

@Injectable({
  providedIn: 'root',
})
export class ListInvestmentsService {
  private url: string = 'http://localhost:3000/investments';

  constructor(private http: HttpClient ) {}


  public list(): Observable<Investments> {
    return this.http.get<Investments>(this.url).pipe(
      map(
        (investments) => {
          return investments;
        }
      )
    );
  }
}
