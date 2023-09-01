import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { AppState } from 'src/app/Store/app.state';

// Importando o store e a action correspondente
// import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/storeActions/app.state';
// import { UsuarioModel } from 'src/app/models/usuario-model';
//import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions';
import * as fromUsuariosAction from 'src/app/Store/usuarios/usuarios.actions';

import * as fromUsuariosSelector from 'src/app/Store/usuarios/usuarios.reducer';


@Component({
  selector: 'app-listagem-user',
  templateUrl: './listagem-user.component.html',
  styleUrls: ['./listagem-user.component.scss'],
})
export class ListagemUserComponent {
  //public usuarios: UsuarioModel[] = [];

  // Implementando o store
  public listaUsuarios$: Observable<UsuarioModel[]> =
    this.store.select(fromUsuariosSelector.getUsuarios);

  constructor(
    // Injetando o serviço UsuarioServiceService com store
    private store: Store<AppState>
  ) //private usuarioService: UsuarioServiceService

  {}

  ngOnInit() {
    // Implementando o store chamando action
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());

    // this.usuarioService.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
    //   this.usuarios = usuarios;
    // });
  }

  editar(usuario: UsuarioModel) {}

  // @functTimeOutEstudoDECORATOR(6000)
  excluir(id: number) {}
}

// Entendendo o funcionamento do decorator @functTimeOutEstudoDECORATOR
function functTimeOutEstudoDECORATOR(milliseconds: number) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Esperando ${milliseconds}...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);
    };

    return descriptor;
  };
}




