import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {CARGAR_USUARIOS, CargarUsuariosFail, CargarUsuariosSuccess} from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UsuarioService} from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) { }

  @Effect()
  cargarUsuarios$: Observable<Action> = this.actions$.pipe(
    ofType(CARGAR_USUARIOS),
    switchMap(() => this.usuarioService.getUsers().pipe(
      map(users => new CargarUsuariosSuccess(users)),
      catchError(error => of(new CargarUsuariosFail(error))
      )
    )
  ));
}
