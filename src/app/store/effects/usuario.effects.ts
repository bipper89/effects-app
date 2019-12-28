import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UsuarioService} from '../../services/usuario.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {CARGAR_USUARIO, CargarUsuario, CargarUsuarioFail, CargarUsuarioSuccess} from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {
  }

  @Effect()
  cargarUsuario$: Observable<Action> = this.actions$.pipe(
    ofType(CARGAR_USUARIO),
    switchMap((action: CargarUsuario) => this.usuarioService.getUserById(action.id).pipe(
      map(user => new CargarUsuarioSuccess(user)),
      catchError(error => of(new CargarUsuarioFail(error)))
      )
    )
  );
}
