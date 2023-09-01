/* 
    Neste arquivo vamos centralizar todos os reducers e selectors do nosso projeto
    para que possamos ter um controle melhor do estado da aplicação.
    O arquivo app.state.ts é o arquivo que vai centralizar todos os reducers e selectors
    do nosso projeto.
*/

import { ActionReducerMap } from "@ngrx/store";
import { UsuariosState, usuariosReducer } from "./usuariosStore/usuarios.reducer";
import { UsuariosEffects } from "./usuariosStore/usuarios.effects";

export interface AppState {
    usuarios: UsuariosState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer
}

export const appEffects = [
    UsuariosEffects
]   