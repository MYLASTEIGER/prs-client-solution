import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request!: Request;
  users!: User[];

  constructor(
    private rqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService,
    private syssvc: SystemService,
  ) { }

  save(): void {
    this.rqsvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request Updated");
        this.router.navigateByUrl("/request/list")
        this.request = res;
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
    let id = +this.route.snapshot.params["id"];
    this.rqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }

    });

  }
}
