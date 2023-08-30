// primeiro cria as a;'oes

import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario-model';

/*
Aqui posso criar calculos, funções, etc...
exemplo:
function functTimeOutEstudoDECORATOR(milliseconds: number) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
*/

export const enum UsuariosTypesAction {
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
export const LoadUsuarios = createAction(
    UsuariosTypesAction.LOAD_USUARIOS
);
export const LoadUsuariosSuccess = createAction(
  UsuariosTypesAction.LOAD_USUARIOS_SUCCESS,
  props<{ payload: UsuarioModel[] }>()
);
export const LoadUsuariosFail = createAction(
  UsuariosTypesAction.LOAD_USUARIOS_FAIL,
  props<{ error: string }>()
);


// Criando as ações  usuario GET
export const LoadUsuario = createAction(
  UsuariosTypesAction.LOAD_USUARIOS,
  props<{ payload: number }>()
);

export const LoadUsuarioSuccess = createAction(
  UsuariosTypesAction.LOAD_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioFail = createAction(
  UsuariosTypesAction.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
);


// Criando as ações  usuarios POST
export const CreateUsuario = createAction(
  UsuariosTypesAction.CREATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioSuccess = createAction(
  UsuariosTypesAction.CREATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioFail = createAction(
  UsuariosTypesAction.CREATE_USUARIO_FAIL,
  props<{ error: string }>()
);


// Create update usuario UPDATE
export const UpdateUsuario = createAction(
  UsuariosTypesAction.UPDATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuariosSuccess = createAction(
  UsuariosTypesAction.UPDATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuariosFail = createAction(
  UsuariosTypesAction.UPDATE_USUARIO_FAIL,
  props<{ error: string }>()
);


// Delete usuario DELETE
export const DeleteUsuario = createAction(
  UsuariosTypesAction.DELETE_USUARIO,
  props<{ payload: number }>()
);

export const DeleteUsuariosSuccess = createAction(
  UsuariosTypesAction.DELETE_USUARIO_SUCCESS,
  props<{ payload: number }>()
);

export const DeleteUsuariosFail = createAction(
  UsuariosTypesAction.DELETE_USUARIO_FAIL,
  props<{ error: string }>()
);
export const DeleteUsuarioSuccess = createAction(
  UsuariosTypesAction.DELETE_USUARIO_SUCCESS,
  props<{ payload: number }>()
);

