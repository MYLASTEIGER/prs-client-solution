import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { Vendor } from '../../vendor/vendor.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users!: User[];
  constructor(
    private rqsvc: RequestService,
    private router: Router,
    private usersvc: UserService
  
  ) { }
save(): void {
  this.rqsvc.create(this.request).subscribe({
    next: (res) => {
      console.debug("Request Added");
      this.router.navigateByUrl("/request/list")
    },
    error: (err) => {
      console.error(err);
    }
  });
}


  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) =>{
        console.log(res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
