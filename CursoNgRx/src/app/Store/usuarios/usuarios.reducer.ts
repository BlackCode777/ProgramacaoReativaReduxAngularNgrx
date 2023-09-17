import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario-model';
import * as fromUsuariosAction from './usuarios.actions';

// Para guardar o estado dos usuarios
export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: any | null;
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
    ...state, usuarios: payload, error: '' })),
  on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({
    ...state, error: error })),

  on(fromUsuariosAction.LoadUsuarioSuccess, (state, { payload }) => ({
    ...state, usuario: payload, error: ''})),
  on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({
    ...state, error: error })),

  on(fromUsuariosAction.CreateUsuarioSuccess, (state, { payload }) => ({
    ...state, usuarios: [...state.usuarios, payload], error: ''})),
  on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({
    ...state, error: error, })),

  on(fromUsuariosAction.UpdateUsuariosSuccess, (state, { payload }) => ({
    ...state, usuarios: [ ...state.usuarios, payload ].map((row) => {
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

// Criando uma chave de acesso para o estado dos usuarios
export const getUsuariosFeatureState = createFeatureSelector<UsuariosState>('usuarios');

// Criando um seletor para o estado dos usuarios
export const getUsuarios = createSelector(
    getUsuariosFeatureState, 
    (state: UsuariosState) => state.usuarios 
);

export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuario
);

export const getUsuarioErro = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.error
);

// Função para filtrar somente os usuarios que tem o perfil de administrador
export const getUsuariosAdmin = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios.filter((usuario) => usuario.perfil === 'admin')
);

// Função para filtrar somente os usuarios que tem o perfil de administrador
export const getUsuariosAdministrador = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios.filter((usuario) => usuario.perfil === 'administrador')
);

// Função para filtrar somente os usuarios que tem o perfil de administrador filtrando por parametro passado na função
export const getUsuariosAdministradorPorParametro = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState, props:{perfil: string}) => state.usuarios.filter((usuario) => usuario.perfil == props.perfil)
);

// Função para filtrar somente os usuarios que tem o perfil de gestor
export const getUsuariosGestor = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios.filter((usuario) => usuario.perfil === 'gestor')
);

// Função para filtrar somente os usuarios que tem o perfil de usuario e com idade acima de 50 anos
export const getUsuariosUsuario = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios.filter((usuario) => usuario.perfil === 'usuario' && usuario.idade > 50)
);

// Filtrar somente os usuarios que tem o perfil de usuario e com idade acima de 50 anos e com salario acima de 3.000
// export const getUsuariosUsuarioSalario = createSelector(
//     getUsuariosFeatureState,
//     (state: UsuariosState) => state.usuarios.filter((usuario) => usuario.perfil === 'usuario' && usuario.idade > 50 && usuario.salario > 3000)
// );