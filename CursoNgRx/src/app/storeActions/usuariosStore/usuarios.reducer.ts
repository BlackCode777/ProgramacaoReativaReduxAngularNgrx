import { Action, createReducer, on } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario-model';
import * as fromUsuariosAction from './usuarios.actions';

// Para guaradar o estado dos usuarios
export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null;
  error: string | null;
}

// initialState
export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: '',
};

//criar uma função reducer
const _usuariosReducer = createReducer(
  initialState,

  on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.LoadUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '',
  })),
  on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.CreateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '',
  })),
  on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.UpdateUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload].map((row) => {
      if (row.id === payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
    error: '',
  })),
  on(fromUsuariosAction.UpdateUsuariosFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.DeleteUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((row) => row.id !== payload),
    error: '',
  })),
  on(fromUsuariosAction.DeleteUsuariosFail, (state, { error }) => ({
    ...state,
    error: error,
  }))


);

export function usuariosReducer(state = initialState, action: Action) {
  return _usuariosReducer(state, action);
}
