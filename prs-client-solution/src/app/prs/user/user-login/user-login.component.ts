import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  login: string = "";
  password: string = "";

  constructor(
    private usersvc: UserService,
    private router: Router,
    private syssvc: SystemService
  ) { }
  submit(): void {
    this.syssvc.user = null;
    this.usersvc.login(this.login, this.password).subscribe({
      next: (res) => {
        console.log("Login Successful");
        this.syssvc.user = res;
        this.router.navigateByUrl("/request/list")
     },
     error: (err) => {
       console.error("Login Unsuccessful");
     }
    })
  }

  ngOnInit(): void {
  }

}
