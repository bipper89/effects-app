import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {CargarUsuarios} from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];
  loading: boolean;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('usuarios')
      .subscribe(
        users => {
          this.usuarios = users.users;
          this.loading = users.loading;
          this.error = users.error;
        }
      )
    this.store.dispatch(new CargarUsuarios());
  }

}
