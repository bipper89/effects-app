import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from '../../models/usuario.model';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {CargarUsuario} from '../../store/actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario = null;
  loading: boolean;
  error: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params.id;
        this.store.dispatch(new CargarUsuario(id));
      }
    );

    this.store.select('usuario')
      .subscribe( user => {
        this.user = user.user;
        this.loading = user.loading;
        this.error = user.error;
      });
  }

}
