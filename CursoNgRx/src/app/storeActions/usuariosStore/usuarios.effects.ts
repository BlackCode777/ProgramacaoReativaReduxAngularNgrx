import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioServiceService } from '../../repository/usuario-service.service';

import { catchError, exhaustMap, map, of } from "rxjs";
import * as fromUsuariosAction from './usuarios.actions';


// Criasse uma classe de UsuariosEffects para tratar os efeitos colaterais
@Injectable()
export class UsuariosEffects {
  // O effects executa uma ação ou dar um erro
  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioServiceService
  ) {}

  loadUsuarios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsuariosAction.UsuariosTypesAction.LOAD_USUARIOS),
      exhaustMap(() =>
        this.usuariosService.getUsuarios().pipe(
          map((payload) => fromUsuariosAction.LoadUsuariosSuccess({ payload })), // Aqui retorna a ação certa
          catchError(
            (error) => of(fromUsuariosAction.LoadUsuariosFail({ error })) // Aqui retorna a ação de erro
          )
        )
      )
    );
  });

  loadUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsuariosAction.UsuariosTypesAction.LOAD_USUARIO),
      exhaustMap((record: any) =>
        this.usuariosService.getUsuario(record.payload).pipe(
          //getUsuario(record) record é o id do usuario
          map(
            (payload) => fromUsuariosAction.LoadUsuarioSuccess({ payload }), // Aqui retorna a ação certa }),
            catchError((error) =>
              of(fromUsuariosAction.LoadUsuarioFail({ error }))
            ) // Aqui retorna a ação de erro'
          )
        )
      )
    );
  });

  createUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsuariosAction.UsuariosTypesAction.CREATE_USUARIO),
      exhaustMap((record: any) =>
        this.usuariosService.addUsuario(record.payload).pipe(
          //getUsuario(record) record é o id do usuario
          map(
            (payload) => fromUsuariosAction.CreateUsuarioSuccess({ payload }), // Aqui retorna a ação certa }),
            catchError((error) =>
              of(fromUsuariosAction.CreateUsuarioFail({ error }))
            ) // Aqui retorna a ação de erro'
          )
        )
      )
    );
  });

  updateUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsuariosAction.UsuariosTypesAction.UPDATE_USUARIO),
      exhaustMap((record: any) =>
        this.usuariosService.updateUsuario(record.payload).pipe(
          //getUsuario(record) record é o id do usuario
          map(
            (payload) => fromUsuariosAction.UpdateUsuariosSuccess({ payload }), // Aqui retorna a ação certa }),
            catchError((error) =>
              of(fromUsuariosAction.UpdateUsuariosFail({ error }))
            ) // Aqui retorna a ação de erro'
          )
        )
      )
    );
  });

  deleteUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsuariosAction.UsuariosTypesAction.DELETE_USUARIO),
      exhaustMap((record: any) =>
        this.usuariosService.deleteUsuario(record.payload).pipe(
          //getUsuario(record) record é o id do usuario
          map(
            () =>
              fromUsuariosAction.DeleteUsuarioSuccess({payload: record.payload }), // Aqui retorna a ação certa }),
            catchError((error) =>
              of(fromUsuariosAction.DeleteUsuariosFail({ error }))
            ) // Aqui retorna a ação de erro'
          )
        )
      )
    );
  });


  
}

