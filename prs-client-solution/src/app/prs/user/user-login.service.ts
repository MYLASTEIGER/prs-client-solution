import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(
    private http: HttpClient
  ) { }
  login(login: string, password: string): Observable<User> {
    return this.http.get(`http://localhost:15952/api/users/${login}/${password}`) as Observable<User> };
}
