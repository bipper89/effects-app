import {usuarioReducer, usuariosReducer, UsuariosState, UsuarioState} from './reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState  {
  usuarios: UsuariosState;
  usuario: UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: usuariosReducer,
  usuario: usuarioReducer
}
