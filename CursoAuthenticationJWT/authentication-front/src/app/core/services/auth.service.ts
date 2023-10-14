import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // passo - 1 - criando o service
  public url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient, private router: Router) {}

  // passo - 2 - criando metodo para salvar os valores do formulario
  // passoService - 10 - incluindo a rotas de autenticação para navegar entre as paginas
  public sign(payload: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}auth`, payload).pipe(
      map((res: any) => {
        // passoService - 9 - pegando o token
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', res.token); // JSON.stringify(res.token)

        console.log('pegandoTOKEN ---> ', res);

        // passoService - 11 - navegando para a pagina admin
        return this.router.navigate(['/admin']);
      }),
      catchError((err: any) => {
        // passoService - 8 - pegando o erro se o servidor não existir
        if (err.error.message) {
          return throwError(() => err.error.message);
        }
        return throwError(
          () =>
            'Não estamos conseguindo validar os dados, nosso servidor está fora do ar. Por favor tente mais tarde!'
        ); //err.error.message
      })
    );
    // passo - 3 - Subir o servidor no terminal
  }

  // passoService - 12 - criando metodo para deslogar o usuario
  public logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }

  // passoService - 17 - criando metodo para verificar se o usuario esta logado
  // passoService - 18 - instalando biblioteca jwt-decode
  public isAuthenticaded(): boolean {
    const token = localStorage.getItem('access_token');

    if (!token) return false;
    const jwthHelper = new JwtHelperService(); //JSON.parse(token);
    // passoService - 19 - criando condicional para verificar se o token esta expirado
    return !jwthHelper.isTokenExpired(token);
  }

  /* TOKEN para senha-123456 e email-anderson@anderson.com
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZGVyc29uQGFuZGVyc29uLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2In0.Ptg-O-4Wie9LjkMgZYbcgdvwhAM8Qt0MxPu9I7eWpEE
  */
}
