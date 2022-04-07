import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../prs/user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  _user!: User | null;

  constructor(
    private router: Router
  ) { }
  /*chkLogin(): void {
    if(!this.isLoggedIn) {
      this.router.navigateByUrl("/login");

    }
  }*/
}
