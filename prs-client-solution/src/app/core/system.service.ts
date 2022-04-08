import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../prs/user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user: any = null;

  constructor(
    private router: Router
  ) { }
  chkLogin(): void {
    if(this.user == null) {
      this.router.navigateByUrl("/login");

    }
  }
}
