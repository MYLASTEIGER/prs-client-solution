import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  login: string = "";
  password: string = "";

  constructor(
    private uslgsvc: UserLoginService,
    private router: Router

  ) { }
  submit(): void {
    this.uslgsvc.login(this.login, this.password).subscribe({
      next: (res) => {
        console.log("Login Successful");
        this.router.navigateByUrl("/requests/list")
     },
     error: (err) => {
       console.error("Login Unsuccessful");
     }
    })
  }

  ngOnInit(): void {
  }

}
