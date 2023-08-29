// primeiro cria as a;'oes

import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario-model';

export const enum UsuariosActionTypes {
  LOAD_USUARIOS = '[LOAD_USUARIOS] Load Usuarios',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] Load Usuarios Success',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] Load Usuarios Fail',

  // Carrega usuarios por ID
  LOAD_USUARIO = '[LOAD_USUARIO] Load Usuario', // Load UsuarioModel
  LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] Load Usuario Success',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] Load Usuario Fail',

  // Cria usuarios
  CREATE_USUARIO = '[CREATE_USUARIO] Create Usuario', // Create UsuarioModel
  CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] Create Usuario Success',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] Create Usuario Fail',

  // Atualiza usuarios por ID
  UPDATE_USUARIO = '[UPDATE_USUARIO] Update Usuario', // Update UsuarioModel
  UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] Update Usuario Success',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] Update Usuario Fail',

  // Deleta usuarios por ID
  DELETE_USUARIO = '[DELETE_USUARIO] Delete Usuario', // Delete UsuarioModel
  DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] Delete Usuario Success',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] Delete Usuario Fail',
}

// Criando as ações
export const LoadUsuarios = createAction(UsuariosActionTypes.LOAD_USUARIOS);

export const LoadUsuariosSuccess = createAction(
  UsuariosActionTypes.LOAD_USUARIOS_SUCCESS,
  props<{ usuarios: any[] }>()
);

export const LoadUsuariosFail = createAction(
  UsuariosActionTypes.LOAD_USUARIOS_FAIL,
  props<{ payload: string[] }>()
);

// Criando as ações  usuario
export const LoadUsuario = createAction(
  UsuariosActionTypes.LOAD_USUARIOS,
  props<{ id: number }>()
);

export const LoadUsuarioSuccess = createAction(
  UsuariosActionTypes.LOAD_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioFail = createAction(
  UsuariosActionTypes.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
);

// Criando as ações  usuario
export const CreateUsuario = createAction(
  UsuariosActionTypes.CREATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuariosSuccess = createAction(
  UsuariosActionTypes.CREATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuariosFail = createAction(
  UsuariosActionTypes.CREATE_USUARIO_FAIL,
  props<{ error: string }>()
);

// Create update usuario
export const UpdateUsuario = createAction(
  UsuariosActionTypes.UPDATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuariosSuccess = createAction(
  UsuariosActionTypes.UPDATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuariosFail = createAction(
  UsuariosActionTypes.UPDATE_USUARIO_FAIL,
  props<{ error: string }>()
);

// Delete usuario
export const DeleteUsuario = createAction(
  UsuariosActionTypes.DELETE_USUARIO,
  props<{ payload: number }>()
);

export const DeleteUsuariosSuccess = createAction(
  UsuariosActionTypes.DELETE_USUARIO_SUCCESS,
  props<{ payload: number }>()
);

export const DeleteUsuariosFail = createAction(
  UsuariosActionTypes.DELETE_USUARIO_FAIL,
  props<{ error: string }>()
);
