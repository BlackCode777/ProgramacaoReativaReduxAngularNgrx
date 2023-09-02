import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { AppState } from 'src/app/Store/app.state';
import * as fromUsuariosAction from 'src/app/Store/usuarios/usuarios.actions';
import * as fromUsuariosSelector from 'src/app/Store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-lista-user-admin',
  templateUrl: './lista-user-admin.component.html',
  styleUrls: ['./lista-user-admin.component.scss'],
})
export class ListaUserAdminComponent {
  // Implementando o store - jeito 1
  public listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(
    fromUsuariosSelector.getUsuariosAdmin
  );

  // Implementando o store - jeito 2
  public listaUsuarios2: UsuarioModel[] = [];

  // Implementando o store - jeito 3
  public listaUsuarios3: UsuarioModel[] = [];

  // Implementando o store - jeito 4
  public listaUsuarios4: UsuarioModel[] = [];

  // Implementando o store - jeito 5
  public listaUsuarios5$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministradorPorParametro, {perfil: 'administrador'});

  constructor(
    // Injetando o serviço UsuarioServiceService com store
    private store: Store<AppState> //private usuarioService: UsuarioServiceService
  ) {}

  ngOnInit() {
    // Implementando o store chamando action - jeito 1
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());

    // Jeito 2
    this.store
      .select(fromUsuariosSelector.getUsuariosAdministrador)
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios2 = usuarios;
      });

    // Jeito 3
    this.store
      .select(fromUsuariosSelector.getUsuarios)
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios3 = usuarios.filter(
          (usuario) => usuario.perfil == 'administrador'
        );
      });

    // Jeito 4
    this.store
      .select(fromUsuariosSelector.getUsuariosAdministradorPorParametro, {
        perfil: 'administrador',
      })
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios4 = usuarios;
      });
  }

  editar(id: number) {}
  excluir(id: number) {}
}
