import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';


@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<UsuarioModel[]>('http://localhost:3000/usuarios');
  }

  getUsuario(id: number) {
    return this.http.get<UsuarioModel[]>('http://localhost:3000/usuarios/' + id);
  }

  addUsuario(usuario: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<UsuarioModel>(
      'http://localhost:3000/usuarios',
      JSON.stringify(usuario),
      { headers: headers }
    );
  }

  updateUsuario(usuario: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<UsuarioModel>(
      'http://localhost:3000/usuarios' + usuario.id,
      JSON.stringify(usuario),
      { headers: headers }
    );
  }

  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(
      'http://localhost:3000/usuarios' + id,
      { headers: headers }
    );
  }
}

