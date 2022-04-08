import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request! : Request;
  users!: User[];
  showVerifyButton: boolean = false;


  constructor(
    private rqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router, 
    private usersvc: UserService,
  ) { }

    remove(): void {
      this.showVerifyButton =!this.showVerifyButton
    }
    verifyRemove(): void {
      this.showVerifyButton = false;
      this.rqsvc.remove(this.request.id).subscribe({
        next: (res) => {
          console.debug("Product Deleted");
          this.router.navigateByUrl("/request/list");
          this.request = res;
        },
      })
    }


  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.rqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


}
