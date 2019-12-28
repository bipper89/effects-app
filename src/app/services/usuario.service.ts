import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.API_URI;

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6&delay=2`)
      .pipe(
        map(response => {
          return response['data'];
        })
      );
  }

  getUserById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        map(response => response['data'])
      );
  }
}
